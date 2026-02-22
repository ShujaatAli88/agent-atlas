from fastapi import APIRouter, HTTPException, Depends
from passlib.context import CryptContext
from pydantic import BaseModel, EmailStr
import database_manager
from models import UserDocument
from fastapi import APIRouter, HTTPException, Depends, status

router = APIRouter(prefix="/users", tags=["users"])
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str

@router.post("/register")
async def register_user(user: UserCreate):
    users_collection = database_manager.get_user_collection()

    # 1. Check if email exists
    existing_user = await users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # 2. Hash Password
    hashed_password = pwd_context.hash(user.password)

    # 3. Create Document
    new_user = {
        "full_name": user.full_name,
        "email": user.email,
        "hashed_password": hashed_password
    }

    # 4. Insert into MongoDB
    result = await users_collection.insert_one(new_user)
    
    return {"message": "User created in MongoDB", "id": str(result.inserted_id)}


# 1. Pydantic schema for Login request
class UserLogin(BaseModel):
    email: EmailStr
    password: str

@router.post("/login")
async def login_user(user_data: UserLogin):
    users_collection = database_manager.get_user_collection()

    # 2. Find user by email
    user = await users_collection.find_one({"email": user_data.email})
    
    # 3. Verify user exists and check password
    if not user or not pwd_context.verify(user_data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    # 4. Return success (In a real app, you would return a JWT token here)
    return {
        "message": "Login successful",
        "user": {
            "full_name": user["full_name"],
            "email": user["email"]
        }
    }


# Add to your existing users.py
@router.get("/sites")
async def get_sites():
    sites_collection = database_manager.get_user_collection().database["sites"]
    # Fetch all sites from the new collection
    sites = await sites_collection.find().to_list(length=100)
    
    # Clean up the MongoDB _id for the frontend
    for site in sites:
        site["_id"] = str(site["_id"])
    return sites