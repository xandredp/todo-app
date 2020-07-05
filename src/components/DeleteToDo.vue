<template>
  <div class="delete-todo">
    <b-button variant="danger" class="last" @click="deleteToDo(todo.id)">
      <b-icon-trash></b-icon-trash>
    </b-button>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "DeleteToDo",
  props: {
    todo: Object
  },
  data() {
    return {
      title: "",
      titleState: null
    };
  },
  methods: {
    /**
     * Delete a todo after checking with the user.
     * @param {number} id The id of the todo to delete
     */
    deleteToDo(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "Are you sure you want to delete this to do?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then(result => {
        if (result.value) {
          this.axios
            .delete("https://jsonplaceholder.typicode.com/todos/" + id)
            .then(Swal.fire("Success", "To do has been deleted", "success"))
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
.delete-todo {
  button {
    @media only screen and (max-width: 500px) {
      font-size: 0.75rem;
    }
  }
}
</style>
