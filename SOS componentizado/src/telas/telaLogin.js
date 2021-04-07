import React from "react";
import "../estilos/style.css";
import * as yup from "yup";
import { ptForm } from "yup-locale-pt";
import { Formik, Form as FF, Field, ErrorMessage } from "formik";

yup.setLocale(ptForm); //validacoes em portugues!

const schemaValidacoes = yup.object().shape({
  usuario: yup
    .string()
    .email()
    .required(),
  senha: yup
    .string()
    .min(6)
    .required()
});

const obj = { usuario: "", senha: "" };

function enviar(event) {
  event.preventDefault();
  alert("Logando... Aguarde.");
}

const Login = () => (
  <Formik
    initialValues={obj}
    onSubmit={enviar}
    validationSchema={schemaValidacoes}
  >
    <FF className="Form">
      <Field
        className="Form-Field"
        type="text"
        name="usuario"
        placeholder="Digite seu email aqui"
      />
      <ErrorMessage component="span" name="usuario" />
      <Field
        className="Form-Field"
        type="password"
        name="senha"
        placeholder="Digite sua senha aqui"
      />
      <ErrorMessage component="span" name="senha" />
      <input
        className="btn btn-primary"
        id="entrar"
        type="submit"
        value="Entrar"
      />
    </FF>
  </Formik>
);

export default Login;
