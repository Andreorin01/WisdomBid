from fastapi import APIRouter, HTTPException, Depends
from passlib.hash import bcrypt
from pydantic import BaseModel
from src.db.connection import get_db
from src.models.user import User
from sqlalchemy.orm import Session
from jose import jwt
from src.services.payment_service import create_payment_intent


SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"

router = APIRouter()

# Pydantic models
class UserCreate(BaseModel):
    email: str
    password: str
    role: str

class UserLogin(BaseModel):
    email: str
    password: str

@router.post("/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")
    hashed_password = bcrypt.hash(user.password)
    new_user = User(email=user.email, password=hashed_password, role=user.role)
    db.add(new_user)
    db.commit()
    return {"message": "User created successfully"}

@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()
    if not db_user or not bcrypt.verify(user.password, db_user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = jwt.encode({"email": user.email}, SECRET_KEY, algorithm=ALGORITHM)
    return {"access_token": token}

from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@router.get("/protected")
def protected_route(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return {"message": f"Hello, {payload['email']}"}
    except jwt.JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")


@router.post("/create-payment-intent")
def create_payment(amount: int):
    try:
        intent = create_payment_intent(amount)
        return {"client_secret": intent["client_secret"]}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))