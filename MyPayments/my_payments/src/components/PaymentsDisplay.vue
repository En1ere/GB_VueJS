<template>
  <div class="list">
    <table>
      <thead>
        <td>#</td>
        <td>Date</td>
        <td>Category</td>
        <td>Value</td>
      </thead>
      <tbody>
        <tr class="item" v-for="(item, idx) in items" :key="idx">
          <td>{{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
          <td>
            <component
              @edit="editPayment"
              @delete="deletePayment"
              :is="settings.compName"
              :item="idx"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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

<style lang="scss">
table {
  border-collapse: collapse;
  & td {
    width: 200px;
    font-size: 20px;
    padding: 20px 0;
    text-align: left;
  }
}
thead td {
  font-weight: 800;
}
tbody td {
  border-top: 1px solid rgb(185, 185, 185);
}
.context__active {
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
</style>
