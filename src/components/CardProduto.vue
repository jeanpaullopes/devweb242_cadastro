<template>
  <div>
    {{ produto }}
  </div>
</template>
<script>
export default {
  name: "CardProduto", // nome do componente
  props: {
    // atributos recebidos pelo componente
    produto: {
      type: Object,
      required: true,
    },
  },
  comments: {}, // componentes utilizados pelo componente
  emits: [], // eventos emitidos pelo componente
  created() {
    // método executado quando o componente é criado
    console.log(this.produto);
  },
  mounted() {
    // metodo executado quando o componente é montado
    console.log(this.produto);
  },
  data() {
    // dados do componente
    return {};
  },
  computed: {
    // propriedades computadas do componente
  },
  methods: {
    // métodos do componente
  },
};
</script>
