<template>
  <div class="search-filter">
    <b-form-input
      placeholder="Search todos"
      v-model.trim="input"
      v-on:input="search()"
    ></b-form-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("UPDATE_CURATED_LIST", this.input);
      this.$store.commit("SET_LIST_SEARCH", this.input);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-filter {
  width: 75%;

  @media only screen and (max-width: 400px) {
    width: 65%;
  }

  input {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}
</style>
