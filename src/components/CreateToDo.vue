<template>
  <div class="create-todo">
    <b-button
      variant="outline-success"
      @click="$bvModal.show('createModal')"
      ref="btnShow"
    >
      <b-icon-plus-circle></b-icon-plus-circle>
      Create
    </b-button>
    <b-modal
      id="createModal"
      title="Create To Do"
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
  name: "CreateToDo",
  data() {
    return {
      title: "",
      titleState: null
    };
  },
  methods: {
    showModal() {
      this.$root.$emit("bv::show::modal", "createModal", "#btnShow");
    },
    reset() {
      this.title = "";
      this.titleState = null;
      this.error = null;
    },
    focusInput() {
      this.$refs.focusThis.focus();
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.titleState = valid;
      return valid;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
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
          Swal.fire("Success", "Successfully created to do", "success");
        })
        .catch(error => {
          this.hideModal();
          Swal.fire("Error", error, "error");
          console.log(error);
        });
    },
    hideModal() {
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("createModal");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.create-todo {
  button {
    display: block;
    margin-left: auto;
  }

  @media only screen and (max-width: 575px) {
    margin-top: 40px;

    button {
      margin: 0px auto;
    }
  }
}
</style>
