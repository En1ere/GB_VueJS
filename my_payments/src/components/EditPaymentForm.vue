<template>
  <v-card title="Add New Payment" class="text-left pa-8">
    <v-text-field v-model="date" label="Date" />
    <v-select
      :items="categoryList"
      v-model="category"
      label="Category"
    ></v-select>
    <v-text-field v-model.number="value" label="Value" />
    <p class="text-body-1 teal--text">{{ error }}</p>
    <v-btn @click="onClick" color="teal" dark class="mr-4">Save</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "EditPaymentForm",
  props: {
    curValue: Number,
    curCategory: String,
    curDate: String,
  },
  data() {
    return {
      error: "",
      value: this.curValue,
      category: this.curCategory,
      date: this.curDate,
    };
  },
  methods: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate().toLocaleString();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.0${m}.${y}`;
    },
    onClick() {
      this.error = "";
      if (!this.category || !this.value) {
        return (this.error = "Enter the data!");
      }
      const { value, category } = this;
      const data = {
        date: this.date || this.getCurrentDate(),
        category,
        value,
      };
      console.log(data);
      this.$emit("editPayment", data);
    },
  },
  computed: {
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },
  mounted() {
    this.category = this.$route.params.category;
    this.value = this.$route.params.value;
  },
  created() {
    this.$store.dispatch("fetchCategoryList");
  },
};
</script>

<style>
</style>