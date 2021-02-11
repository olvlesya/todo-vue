<template>
  <a-list bordered :data-source="todos">
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :completed="todo.completed"
      :text="todo.text"
    />
  </a-list>
</template>

<script lang="ts">
import Vue from "vue";
import { List, Button } from "ant-design-vue";
import Todo from "./Todo.vue";
import { store } from "../store";

Vue.use(List);
Vue.use(Button);

export default Vue.extend({
  name: "Todos",
  computed: {
    todos() {
      const { todos, filterString } = store.state;
      return filterString
        ? todos.filter(todo => todo.text.indexOf(filterString) !== -1)
        : todos;
    }
  },
  components: {
    Todo
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
