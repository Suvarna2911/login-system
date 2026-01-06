from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from schemas import RegisterSchema, LoginSchema
from services import create_user, authenticate

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register(data: RegisterSchema, db: Session = Depends(get_db)):
    create_user(db, data)
    return {"message": "User registered"}

@router.post("/login")
def login(data: LoginSchema, db: Session = Depends(get_db)):
    user = authenticate(db, data)
    if not user:
        return {"error": "Invalid credentials"}
    return {"message": "Login success"}
