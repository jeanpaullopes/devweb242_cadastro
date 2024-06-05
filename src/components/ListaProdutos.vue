<template>
  <div class="lista">
    <CardProduto
      v-for="produto in produtos"
      :key="produto.id"
      :produto="produto"
      :comImagem="true"
      @comprar="onComprar"
      @detalhes="onDetalhes"
      @retirar="onRetirar"
      :botoes="botoes"
    />
  </div>
</template>
<script>
import CardProduto from "src/components/CardProduto.vue";
export default {
  name: "ListaProdutos",
  emits: ["comprar", "retirar", "detalhes"],
  components: {
    CardProduto,
  },
  props: {
    produtos: {
      type: Array,
      required: true,
    },
    botoes: {
      type: Array,
      required: false,
      default: () => ["comprar", "detalhes", "retirar"],
    },
  },
  methods: {
    onComprar(produto) {
      this.$emit("comprar", produto);
    },
    onRetirar() {
      this.$emit("retirar", this.produto);
    },
    onDetalhes() {
      this.$emit("detalhes", this.produto);
    },
  },
};
</script>
<style>
.lista {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: red;
  border: 1px solid black;
  border-shadow: 5px 5px 5px black;
}
</style>
