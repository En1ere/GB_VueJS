<template>
  <div class="wrapper">
    <button class="context__active" @click="contextActive = !contextActive">
      <font-awesome-icon :icon="menu" />
    </button>
    <transition name="fade">
      <div class="context" v-if="contextActive">
        <button class="context__button" @click="editPayment" :data-id="item">
          <span><font-awesome-icon :icon="pencil" /></span> Edit
        </button>
        <button class="context__button" @click="deletePayment" :data-id="item">
          <span><font-awesome-icon :icon="trash" /></span> Delete
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  faPencilAlt,
  faTrashAlt,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
export default {
  name: "ContextMenu",
  props: {
    item: Number,
  },
  data() {
    return {
      targetItem: Number,
      contextActive: false,
    };
  },
  methods: {
    editPayment(e) {
      this.contextActive = false;
      this.targetItem = e.target.dataset.id;
      this.$emit("edit", this.targetItem);
    },
    deletePayment(e) {
      this.contextActive = false;
      this.targetItem = e.target.dataset.id;
      this.$emit("delete", this.targetItem);
    },
  },
  computed: {
    menu() {
      return faEllipsisV;
    },
    pencil() {
      return faPencilAlt;
    },
    trash() {
      return faTrashAlt;
    },
  },
};
</script>

<style scoped lang='scss'>
.wrapper {
  position: relative;
}
.context {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  box-shadow: 0px 0px 10px -4px rgb(96, 96, 96);
  padding: 20px;
  left: -150px;
  background-color: white;
  min-width: 150px;
  &__active {
    border: none;
    background-color: inherit;
    font-size: 16px;
    font-weight: 100;
    &:hover {
      transition: all 0.3s;
      cursor: pointer;
      color: rgb(124, 223, 43);
    }
  }
  &__button {
    padding: 5px;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    color: white;
    background-color: rgb(110, 196, 39);
    border: none;
    border-radius: 25px;
    &:hover {
      transition: all 0.3s;
      cursor: pointer;
      color: rgb(124, 223, 43);
      background-color: rgb(88, 88, 88);
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
span {
  padding-right: 10px;
}
</style>