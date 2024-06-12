<template>
  <q-card class="q-ma-lg q-pa-md">
    <h5>Cadastro Cliente</h5>
    {{ cliente }}
    <FormCliente @salvarCliente="onSalvarCliente" :cliente="cliente" />
  </q-card>
</template>
<script>
import FormCliente from "../components/FormCliente.vue";
import services from "src/services";
import cartStore from "src/stores/cartStore";
export default {
  name: "CadastroClientePage",
  components: {
    FormCliente,
  },
  data() {
    return {
      cliente: {},
    };
  },
  created() {
    this.cliente = cartStore.cliente;
  },
  methods: {
    onSalvarCliente(cliente) {
      if (cliente.id) {
        services.clientes.updateCliente(cliente);
      } else {
        services.clientes.saveCliente(cliente);
      }
    },
  },
};
</script>
