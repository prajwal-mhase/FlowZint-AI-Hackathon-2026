from fastapi import FastAPI

from app.api.router import api_router
from app.core.config.settings import get_settings
from app.core.logging.logger import configure_logging


def create_app() -> FastAPI:
    settings = get_settings()
    configure_logging(settings.log_level)

    app = FastAPI(
        title=settings.service_name,
        version=settings.service_version,
        description="EchoTwin AI backend for customer intelligence, RAG, and analytics.",
        docs_url="/docs",
        redoc_url="/redoc",
        openapi_url="/openapi.json",
    )
    app.include_router(api_router, prefix=settings.api_v1_prefix)
    return app


app = create_app()
