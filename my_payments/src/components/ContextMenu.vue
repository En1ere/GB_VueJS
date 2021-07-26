<template>
  <v-row justify="center">
    <div class="mx-4 hidden-sm-and-down"></div>

    <v-menu transition="slide-x-reverse-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn rounded elevation="0" color="white" class="ma-2" v-bind="attrs" v-on="on" >
          <font-awesome-icon :icon="menu" />
        </v-btn>
      </template>
      <v-list>
        <v-list-item link>
          <span
            ><font-awesome-icon
              :icon="pencil"
              class="pr-2 text-h5"
              @click="editPayment"
              :data-id="item"
          /></span>
          Edit
        </v-list-item>
        <v-list-item link>
          <span
            ><font-awesome-icon
              :icon="trash"
              class="pr-2 text-h5"
              @click="deletePayment"
              :data-id="item"
          /></span>
          Delete
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
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

<style>
</style>