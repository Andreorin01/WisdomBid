from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

from src.routes import auth
from src.db import connection  # Uncomment if the connection object is needed elsewhere

# Try to import payment router if it exists
try:
    from src.routes import payment
    payment_router_exists = True
except ImportError:
    payment_router_exists = False

app = FastAPI()

# Serve React static files
frontend_build_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../frontend/build"))
app.mount("/static", StaticFiles(directory=os.path.join(frontend_build_path, "static")), name="static")

@app.get("/{full_path:path}")
def serve_react_app(full_path: str):
    return FileResponse(os.path.join(frontend_build_path, "index.html"))

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