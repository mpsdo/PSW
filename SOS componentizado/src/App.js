import React from "react";
import { Provider } from "react-redux";
import Store from "./telas/reducer";
import "./estilos/style.css";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Menu from "./componentes/menu";

export default function App() {
  return (
    <>
      <Header />
      <Provider store={Store}>
        <Menu />
      </Provider>
      <Footer />
    </>
  );
}
