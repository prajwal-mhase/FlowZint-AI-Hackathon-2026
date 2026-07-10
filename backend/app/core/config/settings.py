from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    service_name: str = "EchoTwin AI"
    service_version: str = "0.1.0"
    api_v1_prefix: str = "/api"
    log_level: str = Field(default="INFO", description="Standard logging level")
    environment: str = Field(default="local", description="Deployment environment")
    jwt_secret_key: str = Field(default="change-me", description="JWT signing secret")
    jwt_algorithm: str = "HS256"
    access_token_ttl_minutes: int = 60
    cors_origins: list[str] = ["http://localhost:3000", "http://127.0.0.1:3000"]


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()
