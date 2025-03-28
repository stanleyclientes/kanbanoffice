"use client";

import axios from "axios";
import styles from "@/app/dashboard/dashboard.module.css"; // Importando o CSS Module
import { useState } from "react";

export default function Dashboard () {
  const [titleBoards, setTitleBoards] = useState<string>("")

  // GET Board
  const getBoards = async () => {
    try {
      const response = await axios.get(""); // Adicione a URL correta
      console.log(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Erro do backend:", error.message);
      } 
    }
  }

  // GET Lists
  const getLists = async () => {
    try {
      const response = await axios.get(""); // Adicione a URL correta
      console.log(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Erro do backend:", error.message);
      } 
    }
  }

  // GET Cards
  const getCards = async () => {
    try {
      const response = await axios.get(""); // Adicione a URL correta
      console.log(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Erro do backend:", error.message);
      } 
    }
  }

  // POST Board
  const postBoards = async () => {
    try {
      const quadro = { title: "Sou um quadro" }; // O body deve ser um objeto JSON
      const response = await axios.post(`http://192.168.247.104:8080/boards/post`, quadro, {
        headers: { "Content-Type": "application/json" } // Garante que o backend entenda o formato JSON
      });
      console.log('Board criado com sucesso', response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Falha ao criar board", error.message);
      }
    }
  };  
  
  // POST Lists
  const postLists = async () => {
    try {
      const lists = {title: "Sou uma lista"}
      const response = await axios.post("http://192.168.247.104:8080/lists/post", lists, {
        headers: { "Content-Type": "application/json" } // Garante que o backend entenda o formato JSON
      });
      console.log('List criada com sucesso', response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Erro ao criar list", error.message);
      } 
    }
  }
  
  // POST Cards
  const postCards = async () => {
    try {
      const response = await axios.post(""); // Adicione a URL correta
      console.log(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Erro do backend:", error.message);
      } 
    }
  }

  // PATCH Board
  const patchBoards = async () => {
    try {
      const response = await axios.patch(""); // Adicione a URL correta
      console.log(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Erro do backend:", error.message);
      } 
    }
  }

  // PATCH Lists
  const patchLists = async () => {
    try {
      const response = await axios.patch(""); // Adicione a URL correta
      console.log(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Erro do backend:", error.message);
      } 
    }
  }

  // PATCH Cards
  const patchCards = async () => {
    try {
      const response = await axios.patch(""); // Adicione a URL correta
      console.log(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Erro do backend:", error.message);
      } 
    }
  }

  // DELETE Board
  const deleteBoards = async () => {
    try {
      const response = await axios.delete(""); // Adicione a URL correta
      console.log(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Erro do backend:", error.message);
      } 
    }
  }

  // DELETE Lists
  const deleteLists = async () => {
    try {
      const response = await axios.delete(""); // Adicione a URL correta
      console.log(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Erro do backend:", error.message);
      } 
    }
  }

  // DELETE Cards
  const deleteCards = async () => {
    try {
      const response = await axios.delete(""); // Adicione a URL correta
      console.log(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Erro do backend:", error.message);
      } 
    }
  }

  return(
    <div className={styles.dashboard}>
      {/* Coluna Lateral */}
      <div className={styles.sidebar}>
        <p>Logo</p>
        <p>Seus Quadros:</p>
        <button onClick={postBoards}>Criar Quadro</button>
        <p>Configuração</p>
        <p>Sair</p>
      </div>

      {/* Parte Principal */}
      <div className={styles.main}>
        <div className={styles.list}>
          <h3>Lista 1</h3>
        </div>
        <div className={styles.list}>
          <h3>Lista 2</h3>
        </div>

        <button onClick={postLists} className={styles["add-list"]}>Criar Lista</button>
      </div>
    </div>
  )

}