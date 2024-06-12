<template>
  <q-page class="flex flex-center">
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
  },
});
</script>
