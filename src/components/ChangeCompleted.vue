<template>
  <div class="change-completed">
    <b-button
      v-if="todo.completed"
      variant="warning"
      class="first"
      @click="changeCompletedStatus(todo.id, false)"
    >
      <b-icon-slash-circle-fill></b-icon-slash-circle-fill>
    </b-button>
    <b-button
      v-else
      variant="success"
      class="first"
      @click="changeCompletedStatus(todo.id, true)"
    >
      <b-icon-check-circle-fill></b-icon-check-circle-fill>
    </b-button>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "ChangeCompleted",
  props: {
    todo: Object
  },
  methods: {
    /**
     * Change the completed status of a todo.
     * @param {number} id The id of the todo to edit
     * @param {boolean} status Change the completed key of the todo equal to status
     */
    changeCompletedStatus(id, status) {
      Swal.fire({
        title: "Are you sure?",
        text:
          "Are you sure you want to mark this to do as " +
          (status ? "completed?" : "uncompleted"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then(result => {
        if (result.value) {
          this.axios
            .put("https://jsonplaceholder.typicode.com/todos/" + id, {
              completed: status
            })
            .then(
              Swal.fire(
                "Success",
                "To do is " + (status ? "completed" : "uncompleted"),
                "success"
              )
            )
            .catch(error => {
              Swal.fire("Error", error, "error");
              console.log(error);
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.change-completed {
  button {
    margin-right: 5px;

    @media only screen and (max-width: 500px) {
      font-size: 0.75rem;
    }
  }
}
</style>
