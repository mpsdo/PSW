import React from "react";
import "../estilos/style.css";

function ConteudoL() {
  return (
    <div className="flexible">
      <button className="btn_ligar" id="btn_bombeiros">
        <a href="tel:193">193</a>
      </button>
      <button className="btn_ligar" id="btn_samu">
        <a href="tel:192">192</a>
      </button>
    </div>
  );
}

export default ConteudoL;
