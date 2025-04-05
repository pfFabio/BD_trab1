from sqlalchemy import Column, Integer, String
from conexao import Base

class carta_pkm(Base):
    __tablename__ = "card"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(50), nullable=False)
    hp = Column(Integer, nullable = False)
    elem = Column(String(50))
    evo = Column(Integer)
    atk = Column(Integer)
    custo = Column(Integer)