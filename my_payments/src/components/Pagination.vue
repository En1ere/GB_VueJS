<template>
  <div class="text-center">
    <v-pagination
      color="teal"
      @input="changePage(page)"
      v-model="page"
      :length="pagesCount"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      page: 1,
    };
  },
  props: {
    itemsLength: Number,
    currentPage: Number,
    itemsOnPage: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.itemsLength / this.itemsOnPage);
    },
  },
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>


<style>
</style>