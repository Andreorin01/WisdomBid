from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from src.db.connection import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, nullable=False)  # seeker, giver, admin

    questions = relationship("Question", back_populates="seeker")
    answers = relationship("Answer", back_populates="giver")
    payments = relationship("Payment", back_populates="giver")