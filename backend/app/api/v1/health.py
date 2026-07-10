from fastapi import APIRouter

from app.core.config.settings import get_settings
from app.schemas.common.health import HealthResponse
from app.services.system import get_system_health

router = APIRouter()


@router.get("/health", response_model=HealthResponse)
def health_check() -> HealthResponse:
    settings = get_settings()
    return get_system_health(settings)
