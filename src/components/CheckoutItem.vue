<template>
  <div>
    <q-btn label="-" @click="quantidade--" size="xs" />{{ quantidade
    }}<q-btn label="+" @click="quantidade++" size="xs" />
    {{ item.produto.nome }} R$
    {{ (item.produto.preco * quantidade).toFixed(2) }}
    <q-btn label="x" @click="remove" size="xs" color="red" />
  </div>
</template>
<script>
export default {
  name: "CheckoutItem",
  emits: ["remover"],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  watch: {
    quantidade(atual, anterior) {
      if (atual < 1) {
        if (confirm("Deseja remover o item?")) {
          this.remove();
        } else {
          this.quantidade = anterior;
        }
      }
    },
  },
  data() {
    return {
      quantidade: this.item.qtd,
    };
  },
  methods: {
    onComprar() {
      //this.$emit("comprar", this.produto);
    },
    remove() {
      this.$emit("remover", this.item.produto.id);
    },
  },
};
</script>
