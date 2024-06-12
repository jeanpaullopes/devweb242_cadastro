<template>
  <h4>Checkout</h4>
  <CheckoutItem
    v-for="item in carrinho"
    :key="item.id"
    :item="item"
    @remover="onRemover"
  />
  <h5>Total: R$ {{ total.toFixed(2) }}</h5>
</template>
<script>
import cartStore from "src/stores/cartStore";
import CheckoutItem from "src/components/CheckoutItem.vue";
export default {
  name: "CheckoutPage",
  components: {
    CheckoutItem,
  },
  data() {
    return {
      carrinho: Object,
      cliente: cartStore.cliente,
    };
  },
  created() {
    this.carrinho = cartStore.carrinho;
  },
  computed: {
    total() {
      return this.carrinho.reduce((acc, item) => {
        return acc + item.produto.preco * item.qtd;
      }, 0);
    },
  },
  watch: {
    carrinho() {
      this.carrinho = cartStore.carrinho;
    },
  },
  methods: {
    onRemover(id) {
      console.log(id);
      cartStore.removeProduto(id);
    },
  },
};
</script>
