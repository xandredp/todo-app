<template>
  <div class="todo-item" :class="{ done: item.completed }">
    <h4>{{ item.title }}</h4>
    <p>{{ item.userID }}</p>
    <div class="todo-item-actions">
      <change-completed :todo="item"></change-completed>
      <edit-to-do :todo="item"></edit-to-do>
      <delete-to-do :todo="item"></delete-to-do>
    </div>
  </div>
</template>

<script>
import EditToDo from "./EditToDo";
import DeleteToDo from "./DeleteToDo";
import ChangeCompleted from "./ChangeCompleted";

export default {
  name: "ToDoItem",
  props: {
    item: Object
  },
  components: {
    EditToDo,
    DeleteToDo,
    ChangeCompleted
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px;
  margin: 15px 0px;
  border: 1px solid transparent;
  border-radius: 6px;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }

  &.done {
    border: 1px solid green;
  }

  h4 {
    margin-bottom: 0px;
    text-align: left;

    @media only screen and (max-width: 767px) {
      font-size: 1rem;
    }
  }

  .todo-item-actions {
    display: flex;
    align-items: center;
  }
}
</style>
