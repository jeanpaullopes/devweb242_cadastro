import axios from "axios";
import { Notify } from "quasar";

const jsonAPI = axios.create({
  baseURL: process.env.URL,
});
const produtosServices = {
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
};
export default produtosServices;