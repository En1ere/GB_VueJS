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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
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
</style>