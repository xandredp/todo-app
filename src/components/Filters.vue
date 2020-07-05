<template>
  <div class="filters">
    <b-container>
      <b-row>
        <b-col cols="12" sm="8">
          <div class="filters-wrapper">
            <search-filter></search-filter>
            <advanced-filters></advanced-filters>
          </div>
        </b-col>
        <b-col cols="12" sm="4">
          <create-to-do></create-to-do>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SearchFilter from "./SearchFilter";
import AdvancedFilters from "./AdvancedFilters";
import CreateToDo from "./CreateToDo";

export default {
  name: "Filters",
  components: {
    SearchFilter,
    AdvancedFilters,
    CreateToDo
  }
};
</script>

<style scoped lang="scss">
.filters {
  margin: 20px 0px 40px 0px;

  .filters-wrapper {
    display: flex;
    align-items: center;
    max-width: 700px;
  }
}
</style>
