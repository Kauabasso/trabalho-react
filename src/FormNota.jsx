import React, { useState } from "react";

export default function FormNota({ onNovaNota }) {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");

  const criarNota = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8082/notas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, texto }),
      });

      if (response.ok) {
        setTitulo("");
        setTexto("");
        onNovaNota(); 
      } else {
        console.log("Erro ao criar nota");
      }
    } catch (err) {
      console.log("Erro:", err);
    }
  };

  return (
    <form onSubmit={criarNota}>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
        required
      />
      <br />
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Texto"
        required
      />
      <br />
      <button type="submit">Criar Nota</button>
    </form>
  );
}
