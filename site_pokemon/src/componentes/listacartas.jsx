import React, { useEffect, useState } from 'react';
import { getCards } from '../funcoes/api';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCards();
        setCards(data);
      } catch (error) {
        console.error("Erro ao carregar cartas:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div>
      <h2>Lista de Cartas</h2>
      <ul>
        {cards.map(card => (
          <li key={card.id}>
            <strong>{card.nome}</strong> Custo: {card.custo_atk}- HP: {card.hp} - ATk: {card.atk} - Elemento {card.elem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
