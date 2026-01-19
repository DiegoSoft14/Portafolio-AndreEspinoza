from pydantic import BaseModel
from datetime import datetime
from typing import Optional

# Modelo para respuesta de contacto
class ContactResponse(BaseModel):
    id: str
    name: str
    email: str
    message: str
    created_at: datetime
    status: str = "pending"
    
    class Config:
        json_schema_extra = {
            "example": {
                "id": "contact_123",
                "name": "John Doe",
                "email": "john@example.com",
                "message": "Hola, me gustaría contactarte...",
                "created_at": "2024-01-19T10:30:00Z",
                "status": "pending"
            }
        }