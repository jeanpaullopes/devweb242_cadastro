import axios from "axios";
import { Notify } from "quasar";
import produtosServices from "./produtosServices";
import clientesServices from "./clientesServices";

const jsonAPI = axios.create({
  baseURL: process.env.URL,
});
const services = {
  produtos: produtosServices,
  clientes: clientesServices,
  mensagem: (msg) => {
    Notify.create({
      message: msg,
      color: "primary",
      position: "bottom",
      timeout: 3000,
    });
  },
  mensagemErro: (msg) => {
    Notify.create({
      message: msg,
      color: "negative",
      position: "bottom",
      timeout: 3000,
    });
  },
  validaCPF(cpf) {
    if (cpf.length !== 14) {
      return false;
    }
    if (cpf[3] !== "." || cpf[7] !== "." || cpf[11] !== "-") {
      return false;
    }
    return true;
  },
};

export default services;
