import { defineStore } from "pinia";

const useStore = defineStore("cart", {
  state: () => ({
    carrinho: [],
  }),
  getters: {
    //doubleCount: (state) => state.counter * 2,
  },
  actions: {
    addProduto(produto, quantidade) {
      this.carrinho.push({ qtd: quantidade, produto: produto });
    },
    clearCart() {
      this.carrinho = [];
    },
  },
});
const cartStore = useStore();
export default cartStore;
