import React, { useState } from "react";
import "../estilos/style.css";
import mocks from "../mock";
import Formulario from "../componentes/formCad";

function ConteudoC() {
  const Entidades = mocks;
  const [formulario, setFormulario] = useState(<></>); //HOOK

  return (
    <div className="flexible">
      <select
        className="custom-select"
        onChange={e => setFormulario(<Formulario entidade={e.target.value} />)}
        defaultValue={""}
      >
        {Entidades.map(ent => (
          <option key={ent} value={ent}>
            {ent}
          </option>
        ))}
      </select>
      <br /> <br />
      {formulario}
    </div>
  );
}

export default ConteudoC;
