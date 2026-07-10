from app.core.config.settings import Settings
from app.schemas.common.health import HealthResponse


def get_system_health(settings: Settings) -> HealthResponse:
    return HealthResponse(
        service=settings.service_name,
        version=settings.service_version,
        environment=settings.environment,
    )
