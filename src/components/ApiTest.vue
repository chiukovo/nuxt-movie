<template>
  <div class="ApiTest">
    Api result: <div>{{ getApi }}</div>
  </div>
</template>

<script>
import Base from "./Base";

export default {
  name: "ApiTest",
  data() {
    return {

    };
  },
  mounted() {
    this.$store.dispatch('CALL_API_EXAMPLE', { vm: this });
    console.log(this.$store.state.apiExampleData);
  },
  computed: {
    getApi () {
      return this.$store.state.apiExampleData;
    }
  },
  methods: {

  }
};
</script>
