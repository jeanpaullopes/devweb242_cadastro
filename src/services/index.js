import axios from "axios";
import { Notify } from "quasar";
import produtosServices from "./produtosServices";

const jsonAPI = axios.create({
  baseURL: process.env.URL,
});
const services = {
  produtos: produtosServices,
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
};

export default services;
