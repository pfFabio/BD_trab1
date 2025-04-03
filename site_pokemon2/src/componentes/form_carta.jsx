import React, { useState } from "react";
import { attCard, createCard, delCard } from "../funcoes/api"; // Certifique-se de que essa função esteja definida no seu arquivo de serviços (api.js)
import './form_carta.css';


const FormCarta = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    hp: "",
    elem: "",
    evo: "",
    atk: "",
    custo_atk: ""
  });

  // Função para atualizar o estado conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para submeter o formulário e chamar o endpoint da API
  const adicionacarta = async (e) => {

    // Converte valores numéricos (se necessário)
    const cardData = {
      ...formData,
      hp: parseInt(formData.hp),
      evo: parseInt(formData.evo) ,
      atk: parseInt(formData.atk) ,
      custo_atk: parseInt(formData.custo_atk),
    };
    
    try {
      // Chama a função que envia os dados para o backend
      await createCard(cardData);
      alert("Carta adicionada com sucesso!");
      // Limpa o formulário após o sucesso
      setFormData({
        nome: "",
        hp: "",
        elem: "",
        evo: "",
        atk: "",
        custo_atk: ""
      });
      
    } catch (error) {
      console.error("Erro ao adicionar carta:", error);
      alert("Erro ao adicionar carta!");
    }
  };


  const atualizacarta = async (e) => {

    // Converte valores numéricos (se necessário)
    const cardData = {
      ...formData,
      hp: parseInt(formData.hp),
      evo: parseInt(formData.evo) ,
      atk: parseInt(formData.atk) ,
      custo_atk: parseInt(formData.custo_atk),
    };
    
    try {
      // Chama a função que envia os dados para o backend
      await attCard(cardData);
      alert("Carta atualizada com sucesso!");
      // Limpa o formulário após o sucesso
      setFormData({
        nome: "",
        hp: "",
        elem: "",
        evo: "",
        atk: "",
        custo_atk: ""
      });
      
    } catch (error) {
      console.error("Erro ao atualizar carta:", error);
      alert("Erro ao atualizar carta!");
    }
  };
  
  const [nomeDel, setNomeDeletar] = useState("");
  const handleDeleteChange = (e) => {
    setNomeDeletar(e.target.value);
  };
  const deletacarta = async(e) =>{

    await delCard(nomeDel);
    alert("Carta deletada com sucesso!");
  }

  return (
    <>    
    <form className="form-container">
      <h2>Adicionar/Atualizar Carta</h2>
      <div className="form-group">
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>HP:</label>
        <input
          type="number"
          name="hp"
          value={formData.hp}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Elemento:</label>
        <input
          type="text"
          name="elem"
          value={formData.elem}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Evolução:</label>
        <input
          type="number"
          name="evo"
          value={formData.evo}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Ataque:</label>
        <input
          type="number"
          name="atk"
          value={formData.atk}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Custo:</label>
        <input
          type="number"
          name="custo_atk"
          value={formData.custo_atk}
          onChange={handleChange}
        />
      </div>

      <button onClick={adicionacarta}>Adicionar Carta</button>
      <button onClick={atualizacarta}>Atualizar Carta</button>
    </form>
    <form className="form-container delete-form">
      <h2>Deletar Carta</h2>
      <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nomeDel"
            value = {nomeDel}
            onChange={handleDeleteChange}
            required
          />
        </div>
      <button onClick={deletacarta}>Deletar Carta</button>
    </form>
    </>

  );
};

export default FormCarta;
