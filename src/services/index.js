import axios from "axios";
import { Notify } from "quasar";

const jsonAPI = axios.create({
  baseURL: process.env.URL,
});
const services = {
  getProdutos: (callback) => {
    jsonAPI
      .get("produtos")
      .then((retorno) => {
        callback(retorno.data);
      })
      .catch((erro) => {
        Notify.create({
          message: erro.message,
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
        //this.mensagemErro(erro.message);
      });
  },

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
