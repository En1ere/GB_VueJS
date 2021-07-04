<template>
  <div class="pagination">
    <button><font-awesome-icon :icon="arrowLeft" /></button>
    <button
      v-for="(page, idx) in itemsLength"
      :key="idx"
      @click="changePage(page)"
    >
      {{ page }}
    </button>
    <button><font-awesome-icon :icon="arrowRight" /></button>
  </div>
</template>

<script>
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
export default {
  name: "Pagination",
  props: {
    itemsLength: {
      type: Number,
      default: () => [],
    },
  },
  computed: {
    arrowLeft() {
      return faChevronLeft;
    },
    arrowRight() {
      return faChevronRight;
    },
  },
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>


<style lang='scss'>
.pagination {
  border: 1px solid rgb(185, 185, 185);
  border-radius: 10px;
  min-width: 350px;
  max-width: 800px;
  text-align: center;
  padding: 15px 0;
  box-shadow: 0px 0px 10px -4px rgb(96, 96, 96);

  & button {
    font-size: 20px;
    padding: 8px;
    border: none;
    background-color: inherit;
    font-weight: 400;
    &:hover {
      cursor: pointer;
      color: rgb(114, 207, 38);
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>