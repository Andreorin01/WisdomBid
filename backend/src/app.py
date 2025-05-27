from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

app = FastAPI()

# Serve React static files
app.mount("/static", StaticFiles(directory="../frontend/build/static"), name="static")

@app.get("/")
def serve_react_index():
    return FileResponse("../frontend/build/index.html")

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.routes import auth
from src.db import connection  # Uncomment if the connection object is needed elsewhere

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
    return {"message": "Welcome to WisdomBid Backend System"}