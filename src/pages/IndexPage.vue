<template>
  <q-page class="flex flex-center">
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
    };
  },

  created() {
    services.produtos.getProdutos((prods) => {
      this.arrProdutos = prods;
    });
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
