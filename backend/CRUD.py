from sqlalchemy.orm import Session
from modelo import carta_pkm

def busca_todas_cartas(db: Session):
    return db.query(carta_pkm).all()

def busca_carta(db: Session, card_id: int):
    return db.query(carta_pkm).filter(carta_pkm.id == card_id).first()

def cria_carta(db: Session, card: carta_pkm):
    db.add(card)
    db.commit()
    db.refresh(card)
    return card

def atualiza_carta(db: Session, card_data: dict):
    print('cheguei aki')
    card = db.query(carta_pkm).filter(carta_pkm.nome == card_data.get('nome')).first()
    if card:
        for key, value in card_data.items():
            setattr(card, key, value)
        db.commit()
        db.refresh(card)
    return card

def deleta_carta(db: Session, card_nome: str):
    card = db.query(carta_pkm).filter(carta_pkm.nome == card_nome).first()
    db.delete(card)
    db.commit()
    return {"message": f"Card {card_nome} deletado com sucesso!"}
