from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

from src.routes import auth
from src.routes import payment

from src.db import connection  # Uncomment if the connection object is needed elsewhere

import importlib

# Try to import payment router if it exists
payment_router = None
try:
    payment_module = importlib.import_module("src.routes.payment")
    payment_router = getattr(payment_module, "router", None)
except (ImportError, AttributeError):
    payment_router = None

app = FastAPI()

# Serve React static files
frontend_build_path = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "../../frontend/build"
    )
)
app.mount(
    "/static",
    StaticFiles(directory=os.path.join(frontend_build_path, "static")),
    name="static"
)


@app.get("/{full_path:path}")
def serve_react_app(full_path: str):
    return FileResponse(os.path.join(frontend_build_path, "index.html"))


# CORS configuration (adjust origins for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend URL in production!
    allow_credentials=True,
    allow_methods=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/auth")
if payment_router:
    app.include_router(payment_router, prefix="/payment")

