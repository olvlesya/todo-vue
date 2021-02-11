<template>
  <a-list-item class="list-item" :class="{ completed: completed }">
    <a-button
      type="primary"
      slot="actions"
      shape="circle"
      icon="edit"
      @click="editMode = true"
    />
    <a-button
      type="danger"
      slot="actions"
      icon="delete"
      @click="confirmDelete"
    />
    <a-checkbox :checked="completed" @change="todoComplete()">
      <span v-if="!editMode">{{ text }}</span>
      <a-input
        class="edit-todo"
        v-if="editMode"
        v-model="value"
        @keydown.enter="todoCreate()"
      />
    </a-checkbox>
  </a-list-item>
</template>

<script lang="ts">
import Vue from "vue";
import { Checkbox, List, Input, Modal } from "ant-design-vue";
import { store } from "../store";

Vue.use(Checkbox);
Vue.use(List);
Vue.use(Input);

export default Vue.extend({
  name: "Todo",
  data() {
    return {
      editMode: false,
      value: this.text
    };
  },
  props: {
    id: Number,
    completed: Boolean,
    text: String
  },
  methods: {
    todoCreate() {
      this.editMode = false;
      store.commit("updateText", { text: this.value, id: this.id });
    },
    todoComplete() {
      store.commit("complete", { id: this.id, completed: !this.completed });
    },
    confirmDelete() {
      const id = this.id;
      Modal.confirm({
        title: "Do you really want to remove the todo?",
        onOk() {
          store.commit("delete", id);
        }
      });
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.edit-todo {
  width: 80%;
}
.completed {
  text-decoration: line-through;
  font-style: italic;
}
.list-item {
  text-align: left;

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 120px;
  }
}
</style>
