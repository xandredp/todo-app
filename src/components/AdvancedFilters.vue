<template>
  <div class="advanced-filters">
    <b-button variant="outline-primary">
      Filters
      <b-icon-funnel></b-icon-funnel>
    </b-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.advanced-filters {
  width: 25%;

  @media only screen and (max-width: 400px) {
    width: 35%;
  }

  button {
    width: 100%;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    white-space: nowrap;

    @media only screen and (max-width: 400px) {
      padding: 0.375rem 0.1rem;
    }
  }
}
</style>
