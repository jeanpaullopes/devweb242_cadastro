import axios from "axios";
const jsonAPIClientes = axios.create({
  baseURL: process.env.URL,
});
const clientesServices = {
  saveCliente(cliente) {
    jsonAPIClientes
      .post("clientes", cliente)
      .then((retorno) => {
        console.log(retorno);
      })
      .catch((erro) => {
        console.log(erro);
      });
  },
  updateCliente(cliente) {
    jsonAPIClientes
      .put(`clientes/${cliente.id}`, cliente)
      .then((retorno) => {
        console.log(retorno);
      })
      .catch((erro) => {
        console.log(erro);
      });
  },
};

export default clientesServices;
