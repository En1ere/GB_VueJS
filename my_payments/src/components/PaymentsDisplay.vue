<template>
  <v-container>
    <v-row>
      <v-col cols="1">#</v-col>
      <v-col cols="4">Date</v-col>
      <v-col cols="4">Category</v-col>
      <v-col cols="2">Value</v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-row v-for="(item, idx) in items" :key="idx">
      <v-col cols="1">{{ idx + 1 }}</v-col>
      <v-col cols="4">{{ item.date }}</v-col>
      <v-col cols="4">{{ item.category }}</v-col>
      <v-col cols="2">{{ item.value }}</v-col>
      <v-col cols="1"
        ><component
          @edit="editPayment"
          @delete="deletePayment"
          :is="settings.compName"
          :item="idx"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  data() {
    return {
      compName: "",
      settings: {},
    };
  },
  components: {
    ContextMenu: () => import("./ContextMenu.vue"),
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    editPayment(targetItem) {
      this.$emit("editPayment", targetItem);
    },
    deletePayment(targetItem) {
      this.$emit("deletePayment", targetItem);
    },
    showContextMenu(settings) {
      this.compName = settings.name;
      this.settings = settings.settings;
    },
  },
  mounted() {
    this.$context.EventBus.$on("show", this.showContextMenu);

    this.$context.show("ContextMenu", {
      compName: "ContextMenu",
    });
  },
};
</script>

<style>
</style>
