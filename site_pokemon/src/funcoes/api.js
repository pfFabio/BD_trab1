import axios from 'axios';


const API_URL = 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para obter todas as cartas
export const getCards = async () => {
  try {
    const response = await api.get('/cards/');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar as cartas:", error);
    throw error;
  }
};

// Função para criar uma nova carta
export const createCard = async (cardData) => {
  try {
    const response = await api.post('/cards/cria', cardData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar a carta:", error);
    throw error;
  }
};


export const attCard = async(cardData) =>{
        alert(`o nome é: ${cardData.nome}`)
        const response = await api.put(`/cards/atualiza`, cardData);
        return response.data;
}


export const delCard = async(cardnome) =>{
    alert(`o nome a deletar é: ${cardnome}`)
    const response = await api.delete(`/cards/deleta/${cardnome}`, cardnome);
    return response.data;
}

export default api;
