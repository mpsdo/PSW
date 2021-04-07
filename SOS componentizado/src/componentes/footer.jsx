import React from "react";
import "../estilos/style.css";
import Button from "./button";
import Icone from "./icon";

const Footer = () => (
  <div>
    <br /> <br />
    <footer className="fixed">
      <Button
        type="button"
        className="btn_ligar"
        name="LIGAR"
        icon={<Icone className="glyphicon glyphicon-phone" />}
      />
    </footer>
  </div>
);

export default Footer;
