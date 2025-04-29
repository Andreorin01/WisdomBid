from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from src.db.connection import Base

class Answer(Base):
    __tablename__ = "answers"

    id = Column(Integer, primary_key=True, index=True)
    content = Column(String, nullable=False)
    question_id = Column(Integer, ForeignKey("questions.id"), nullable=False)
    giver_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    is_best_answer = Column(Integer, default=0)  # 0 = False, 1 = True

    question = relationship("Question", back_populates="answers")
    giver = relationship("User", back_populates="answers")