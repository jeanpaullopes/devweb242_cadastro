<template>
  <q-form ref="form">
    <q-input
      v-model="clienteModel.nome"
      label="Nome"
      hint="informe o seu nome"
      clearable
      :rules="[
        (val) => val.length > 0 || 'Campo obrigatório',
        (val) => val.indexOf(' ') > 0 || 'é obrigatório informar o sobrenome',
      ]"
    />
    <q-input
      v-model="clienteModel.cpf"
      label="CPF"
      hint="informe o seu CPF"
      clearable
      mask="###.###.###-##"
      lazy-rules
      :rules="[(val) => validaCPF(val) || 'CPF inválido']"
    />
    {{ clienteModel }}
    {{ cliente }}
    <q-btn label="Salvar" color="primary" @click="salvar" />
  </q-form>
</template>
<script>
import services from "src/services";
export default {
  name: "FormCliente",
  emits: ["salvarCliente"],
  props: {
    cliente: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      clienteModel: {
        nome: "",
        cpf: "",
      },
    };
  },
  created() {
    if (this.cliente) {
      this.clienteModel.id = this.cliente.id;
      this.clienteModel.nome = this.cliente.nome;
      this.clienteModel.cpf = this.cliente.cpf;
    }
  },
  methods: {
    validaCPF(cpf) {
      return services.validaCPF(cpf);
    },
    salvar() {
      console.log(this.clienteModel);
      //if (!services.validaCPF(this.clienteModel.cpf)) {
      //  services.mensagemErro("CPF é obrigatório");
      //}
      this.$refs.form.validate().then((valido) => {
        if (valido) {
          //services.clientes.saveCliente(this.clienteModel);
          this.$emit("salvarCliente", this.clienteModel);
        } else {
          services.mensagemErro("Verifique os campos obrigatórios");
        }
      });
    },
  },
};
</script>
