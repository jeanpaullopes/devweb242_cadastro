import { defineStore } from "pinia";

const useStore = defineStore("cart", {
  state: () => ({
    carrinho: [],
    produtos: [],
    cliente: null,
  }),
  getters: {
    //doubleCount: (state) => state.counter * 2,
  },
  actions: {
    addProduto(produto, quantidade) {
      this.carrinho.push({ qtd: quantidade, produto: produto });
    },
    clearCart() {
      this.carrinho.splice(0, this.carrinho.length);
    },
    removeProduto(id) {
      let p = 0;
      for (let i = 0; i < this.carrinho.length; i++) {
        if (this.carrinho[i].produto.id === id) {
          p = i;
          break;
        }
      }
      this.carrinho.splice(p, 1);
    },
  },
});
const cartStore = useStore();
export default cartStore;
