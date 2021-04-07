import React from "react";
import "../estilos/style.css";
import Button from "../componentes/button";
import Icone from "../componentes/icon";

function ConteudoB() {
  return (
    <div className="flexible">
      <input
        id="search-box-form"
        className="form-control"
        placeholder="Exemplo: 'febre', 'queimadura', 'atropelamento', ..."
      />
      <Button
        type="button"
        id="btn_pesquisar"
        name="Pesquisar"
        icon={<Icone className="glyphicon glyphicon-search" />}
      />
    </div>
  );
}

export default ConteudoB;
