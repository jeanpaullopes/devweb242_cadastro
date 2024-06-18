<template>
  <q-page class="flex flex-center">
    <q-input v-model="email" label="email" />
    <q-input v-model="senha" type="password" label="senha" />
    <q-btn label="login" @click="login" />

    <q-btn label="cria login" @click="criarLogin" />
    {{ cliente }}
    <RouterLink to="/novoCliente">Novo cliente</RouterLink>
    <ListaProdutos
      :produtos="arrProdutos"
      @comprar="onComprar"
      @detalhes="onDetalhes"
      @retirar="onRetirar"
      :botoes="['detalhes', 'comprar']"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services";
import cartStore from "src/stores/cartStore";
import firebaseServices from "src/services/firebase";

import ListaProdutos from "src/components/ListaProdutos.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    ListaProdutos,
  },
  data() {
    return {
      arrProdutos: [],
      cliente: null,
      email: "",
      senha: "",
    };
  },

  created() {
    services.produtos.getProdutos((prods) => {
      this.arrProdutos = prods;
    });
    cartStore.cliente = {
      id: "0000",
      nome: "Brad Pitt",
      cpf: "123.345.789-00",
    };
    this.cliente = cartStore.cliente;
  },
  methods: {
    onComprar(produto) {
      console.log(produto);
      console.log(cartStore.carrinho);
      cartStore.addProduto(produto, 1);
      console.log(cartStore.carrinho);
    },
    criarLogin() {
      firebaseServices.criarUsuarioComEmailSenha(
        "jean.lopes@ulife.com.br",
        "123456",
        (user) => {
          services.mensagem("Usuário criado com sucesso " + user.uid);
          firebaseServices.salvarUsuario(user.uid, "jean.lopes@ulife.com.br");
        }
      );
      //firebaseServices.loginComGoogle((user) => {
      //  services.mensagem(
      //    "Usuário logado com sucesso " + user.name + " " + user.uid
      //  );
      //});
    },
    login() {
      firebaseServices.loginComEmailSenha(this.email, this.senha, (user) => {
        services.mensagem("Usuário logado com sucesso " + user.uid);
      });
    },
  },
});
</script>
