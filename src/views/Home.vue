<template>
  <div class="home">
    <div v-if="ready">
      <Filters />
      <b-container>
        <ToDoList :todos="todos" />
      </b-container>
    </div>
    <div class="loading" v-else>
      <pulse-loader :loading="!ready"></pulse-loader>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from "@/components/ToDoList.vue";
import Filters from "@/components/Filters.vue";

export default {
  name: "Home",
  components: {
    ToDoList,
    Filters
  },
  data() {
    return {
      ready: false,
      todos: []
    };
  },
  mounted() {
    // Get all todos
    this.axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        this.todos = response.data;
        this.ready = true;
      })
      // show toast popup incase of error
      .catch(error => {
        this.$bvToast.toast(error, {
          title: "An Error Occurred",
          variant: "danger",
          solid: true
        });
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 5px;
  margin-top: 40px;
}
</style>
