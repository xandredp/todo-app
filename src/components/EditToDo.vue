<template>
  <div class="edit-todo">
    <b-button
      variant="primary"
      class="second"
      @click="$bvModal.show('editModal-' + todo.id)"
      ref="btnShow"
    >
      <b-icon-pencil-square></b-icon-pencil-square>
    </b-button>
    <b-modal
      :id="'editModal-' + todo.id"
      title="Edit To Do"
      centered
      @shown="focusInput"
      @hidden="reset"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="titleState"
          label="Title"
          label-for="title-input"
          invalid-feedback="Title is required"
        >
          <b-form-input
            id="title-input"
            v-model="title"
            :state="titleState"
            ref="focusThis"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "EditToDo",
  props: {
    todo: Object
  },
  data() {
    return {
      title: "",
      titleState: null,
      item: null
    };
  },
  mounted() {
    this.title = this.todo.title;
  },
  methods: {
    // Reset modal state of input and errors
    reset() {
      this.titleState = null;
      this.error = null;
    },

    // Autofocus the input field
    focusInput() {
      this.$refs.focusThis.focus();
    },

    /**
     * Check if form input is valid.
     * @return {boolean} valid Is form valid.
     */
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.titleState = valid;
      return valid;
    },

    // Handle Ok button press
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },

    // Handle form submit
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Post request
      this.axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title: this.title
        })
        .then(() => {
          this.hideModal();
          Swal.fire("Success", "Successfully updated to do", "success");
        })
        .catch(error => {
          this.hideModal();
          Swal.fire("Error", error, "error");
          console.log(error);
        });
    },

    // Hide the modal manually
    hideModal() {
      this.$nextTick(() => {
        this.$bvModal.hide("editModal-" + this.todo.id);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-todo {
  button {
    margin-right: 5px;

    @media only screen and (max-width: 500px) {
      font-size: 0.75rem;
    }
  }
}
</style>
