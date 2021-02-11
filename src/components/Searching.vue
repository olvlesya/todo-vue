<template>
  <section>
    <a-input-search
      placeholder="Find todo"
      allowClear
      v-model="value"
      @search="search()"
    />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Input } from "ant-design-vue";

Vue.use(Input);

export default Vue.extend({
  name: "Searching",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    search() {
      this.$store.commit("setFilterString", this.value);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
