import React from "react";
import "../estilos/style.css";
import mockSintoma from "../mocks/entS";
import mockAcidente from "../mocks/entAc";
import mockPtoAtd from "../mocks/entPA";
import mockAtd from "../mocks/entAt";

function handleSubmit(event) {
  event.preventDefault();
  //console.log(event);
  alert("Salvando... Aguarde.");
}

function PrimaryForm(props) {
  let lista = [];

  switch (props.entidade) {
    case "Atendimento":
      lista = mockAtd;
      break;
    case "Acidente":
      lista = mockAcidente;
      break;
    case "Ponto de Atendimento":
      lista = mockPtoAtd;
      break;
    case "Sintoma":
      lista = mockSintoma;
      break;
    default:
      break;
  }
  return (
    <form>
      {lista.map(item => (
        <>
          <label key={props.entidade.concat(item)}>{item}: *</label>
          <input
            key={props.entidade.concat("-" + item)}
            type="text"
            className="form-control"
            placeholder={props.entidade.concat("-" + item)}
          />
        </>
      ))}
      <input
        type="button"
        id="btn_cad"
        value="Cadastrar"
        onClick={handleSubmit}
      />
    </form>
  );
}

export default PrimaryForm;