from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.routes import auth
from src.db import connection

# Try to import payment router if it exists
try:
    from src.routes import payment
    payment_router_exists = True
except ImportError:
    payment_router_exists = False

app = FastAPI()

# CORS configuration (adjust origins for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend URL in production!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/auth")
if payment_router_exists:
    app.include_router(payment.router, prefix="/payment")

@app.get("/")
def read_root():
    return {"message": "Welcome to WisdomBid Backend"}