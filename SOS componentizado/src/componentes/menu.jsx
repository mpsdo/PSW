import React from "react";
import "../estilos/style.css";
import TelaCadastro from "../telas/telaCadastro";
import TelaBusca from "../telas/telaBusca";
import TelaLogin from "../telas/telaLogin";
import TelaHistorico from "../telas/telaHistorico";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Router>
        <section>
          <menu>
            <Link to="/busca">Busca</Link>
          </menu>
          <menu>
            <Link to="/cadastro">Cadastro</Link>
          </menu>
          <menu>
            <Link to="/historico">Meu Histórico</Link>
          </menu>
          <menu>
            <Link to="/login">Login</Link>
          </menu>
        </section>

        <Switch>
          <Route exact path="/busca">
            <TelaBusca />
          </Route>

          <Route exact path="/cadastro">
            <TelaCadastro />
          </Route>

          <Route exact path="/historico">
            <TelaHistorico />
          </Route>

          <Route exact path="/login">
            <TelaLogin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Menu;
