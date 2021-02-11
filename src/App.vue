<template>
  <div id="app">
    <section class="todo-app">
      <ControlPanel />
      <Searching />
      <Todos />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "ant-design-vue/dist/antd.css";
import ControlPanel from "./components/ControlPanel.vue";
import Searching from "./components/Searching.vue";
import Todos from "./components/Todos.vue";
import { store } from "./store";
import { saveState } from "./utils";

export default Vue.extend({
  name: "App",
  components: {
    ControlPanel,
    Searching,
    Todos
  },
  store,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  }
});

store.subscribe((_m, state) => {
  saveState({ todos: state.todos });
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.todo-app {
  width: 400px;
  margin: 20px auto;

  @media (max-width: 640px) {
    width: 90%;
  }
}
</style>
