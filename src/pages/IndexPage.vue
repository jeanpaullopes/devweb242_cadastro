<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services";

export default defineComponent({
  name: "IndexPage",
  created() {
    services.getProdutos((prods) => {
      console.log(prods);
    });
  },
});
</script>
