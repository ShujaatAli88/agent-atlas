import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

# Update your .env to use MONGODB_URL=mongodb://localhost:27017
MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGODB_URL)
db = client["data_mania_db"]

def get_user_collection():
    return db["users"]