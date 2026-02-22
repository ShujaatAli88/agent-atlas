from pydantic import BaseModel, EmailStr
from typing import Optional

class UserDocument(BaseModel):
    full_name: str
    email: EmailStr
    hashed_password: str

    class Config:
        # This helps Pydantic play nice with MongoDB's _id field
        from_attributes = True