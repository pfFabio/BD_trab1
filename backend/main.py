from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from modelo import Base, carta_pkm
from conexao import engine, SessionLocal
import CRUD
from pydantic import BaseModel


#CORS conectando o back com o front
app = FastAPI()

origins = ["http://localhost:3000"]  # URL do frontend

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Cria as tabelas no banco de dados (se ainda não existirem)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Cartas de Pokémon")

# Configuração do CORS
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependência para a sessão do banco
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Schemas para validação dos dados
class CardBase(BaseModel):
    nome: str
    hp: int
    elem: str = None
    evo: int = None
    atk: int = None
    custo_atk: int = None

class CardCreate(CardBase):
    pass

class Card(CardBase):
    id: int
    class Config:
        orm_mode = True

# Rotas CRUD

@app.get("/")
def read_root():
    return {"message": "api rodando"}


@app.get("/cards")
def read_cards(db: Session = Depends(get_db)):
    return db.query(carta_pkm).all()

@app.get("/cards/{card_id}", response_model=Card)
def read_card(card_id: int, db: Session = Depends(get_db)):
    card = CRUD.busca_carta(db, card_id)
    return card

@app.post("/cards/cria", response_model=Card)
def create_new_card(card: CardCreate, db: Session = Depends(get_db)):
    db_card = carta_pkm(**card.model_dump())
    return CRUD.cria_carta(db, db_card)

@app.delete("/cards/deleta/{card_nome}", response_model=Card)
def apaga_card(card_nome: str, db: Session = Depends(get_db)):
    print("chegeui")
    mensagem = CRUD.deleta_carta(db, card_nome)
    return mensagem

@app.put("/cards/atualiza", response_model=Card)
def update_card(card: CardCreate, db: Session = Depends(get_db)):
    atualizada = CRUD.atualiza_carta(db, card.model_dump())
    if atualizada is None:
        raise HTTPException(status_code=404, detail="Carta não encontrada")
    return atualizada