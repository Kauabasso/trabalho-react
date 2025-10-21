import React, { useEffect, useState } from "react";

export default function ListaNotas() {
  const [notas, setNotas] = useState([]);

  const fetchNotas = async () => {
    try {
      const res = await fetch("http://localhost:8082/notas");
      const data = await res.json();
      setNotas(data);
    } catch (err) {
      console.log("Erro ao buscar notas:", err);
    }
  };

  useEffect(() => {
    fetchNotas();
  }, []);

  return (
    <div>
      <h2 className="sub">Lista de Notas</h2>
      <ul>
        {notas.map((nota) => (
          <li key={nota.id}>
            <strong>{nota.titulo}</strong>: {nota.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
