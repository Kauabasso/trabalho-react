import React, { useState } from "react";
import FormNota from "./FormNota";
import ListaNota from "./ListaNota";
import "./App.css";

export default function App() {
  const [atualizar, setAtualizar] = useState(false);

  const onNovaNota = () => {
    setAtualizar((prev) => !prev);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 className="title">Minhas Notas</h1>
      <FormNota onNovaNota={onNovaNota} />
      <ListaNota key={atualizar} />
    </div>
  );
}


