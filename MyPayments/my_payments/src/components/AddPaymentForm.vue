<template>
  <div class="payment__form">
    <input placeholder="Date" type="text" v-model.trim="date" />

    <select v-model="category">
      <option v-for="(item, idx) in categoryList" :value="item" :key="idx">
        {{ item }}
      </option>
    </select>
    <input placeholder="Amout" type="number" v-model.number="value" />
    <p class="payment__form-error">{{ error }}</p>
    <button @click="onClick">add <span>✚</span></button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      error: "",
      value: 0,
      category: "",
      date: "",
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
      this.$emit("addNewPayment", data);
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

<style lang="scss">
* {
  font-family: "Oxygen", sans-serif;
  margin: 0;
}
.payment__form {
  display: flex;
  flex-direction: column;
  width: 450px;
  margin-left: 50px;

  & input,
  select {
    font-size: 20px;
    padding-left: 20px;
    display: block;
    max-width: 450px;
    height: 60px;
    margin-bottom: 20px;
    border-radius: 40px;
    border: 1px solid #ccc;
  }
  & button {
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    background-color: rgb(110, 196, 39);
    padding: 20px;
    border: none;
    border-radius: 40px;
    margin-bottom: 50px;
    &:hover {
      transition: all 0.3s;
      cursor: pointer;
      color: rgb(110, 196, 39);
      background-color: rgb(88, 88, 88);
    }
    & span {
      margin-left: 30px;
    }
  }
  &-error {
    color: red;
    font-size: 20px;
    text-align: center;
    font-weight: 800;
    margin: 0 0 40px 0;
  }
}
</style>