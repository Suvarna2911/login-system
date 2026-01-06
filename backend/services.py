from models import User

def create_user(db, data):
    user = User(**data.dict())
    db.add(user)
    db.commit()
    return user

def authenticate(db, data):
    return db.query(User).filter(
        User.username == data.username,
        User.password == data.password
    ).first()
