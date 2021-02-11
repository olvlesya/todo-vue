<template>
  <div>
    <a-input
      data-testid="add-todo"
      placeholder="Enter todo"
      v-model="value"
      @keydown.enter="todoCreate()"
      @keydown.esc="value = ''"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Input } from "ant-design-vue";

Vue.use(Input);

export default Vue.extend({
  name: "ControlPannel",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    todoCreate() {
      this.$store.commit("add", this.value);
      this.value = "";
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
