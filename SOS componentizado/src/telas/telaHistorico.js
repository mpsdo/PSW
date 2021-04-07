import React from "react";
import { useSelector } from "react-redux";

export default function() {
  const sintomas = useSelector(state => state.Sintomas);
  const atendimentos = useSelector(state => state.Atendimentos);
  
  return (
    <div className="flexible">
      {sintomas.map(sintoma => (
        <li key={sintoma.id} className="list-group-item">
          {"[ " + sintoma.data + " ]" + " - " + sintoma.nome}:{" "}
          {sintoma.descricao}
        </li>
      ))}
    </div>
  );
}
