<template>
  <div class="ToDoList">
    <ToDoItem
      class="todo-item-wrapper"
      v-for="(todo, index) in todos"
      :key="index"
      :item="todo"
      data-aos="fade-right"
    />
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem";

export default {
  name: "ToDoList",
  components: {
    ToDoItem
  },
  props: {
    todos: Array
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ToDoList {
  display: flex;
  flex-direction: column;
}
</style>
