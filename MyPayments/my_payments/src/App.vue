<template>
  <div id="app">
    <header class="header">
      <h1>My Personal Costs</h1>
    </header>
    <main class="wrapper">
      <button
        class="button__add"
        @click="activeAddPaymentForm = !activeAddPaymentForm"
      >
        Add new cost <span>✚</span>
      </button>
      <AddPaymentForm
        @addNewPayment="addNewPaymentData"
        v-show="activeAddPaymentForm"
      />
      <br />
      <PaymentsDisplay :items="paymentsList" />
      <Pagination :itemsLength="itemsLength" @changePage="changePage" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import Pagination from "./components/Pagination.vue";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      activeAddPaymentForm: false,
      paymentsList: [],
      itemsLength: 0,
    };
  },
  methods: {
    changePage(page) {
      switch (page) {
        case 1:
          console.log("first page");
          break;
        case 2:
          console.log("second page");
          break;
        case 3:
          console.log("third page");
          break;
      }
    },
    addNewPaymentData(value) {
      this.paymentsList = [...this.paymentsList, value];
    },
    fetchData() {
      return [
        {
          date: "28.08.2019",
          category: "Food",
          value: 300,
        },
        {
          date: "12.03.2020",
          category: "Food",
          value: 180,
        },
        {
          date: "12.04.2020",
          category: "Internet",
          value: 100,
        },
        {
          date: "24.07.2020",
          category: "Game",
          value: 1400,
        },
        {
          date: "11.11.2020",
          category: "Food",
          value: 5400,
        },
        {
          date: "31.12.2020",
          category: "Gifts",
          value: 10250,
        },
        {
          date: "02.01.2021",
          category: "Sport",
          value: 9000,
        },
        {
          date: "11.01.2021",
          category: "Sport",
          value: 400,
        },
        {
          date: "02.06.2021",
          category: "Sport",
          value: 7500,
        },
        {
          date: "21.06.2021",
          category: "Food",
          value: 10000,
        },
        {
          date: "29.06.2021",
          category: "School",
          value: 25000,
        },
        {
          date: "02.07.2021",
          category: "Sport",
          value: 7500,
        },
      ];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
    this.itemsLength = Math.ceil(this.paymentsList.length / 5);
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap");
* {
  font-family: "Oxygen", sans-serif;
  margin: 0;
}
.header {
  font-size: 26px;
  margin: 50px 0 50px 50px;
}
.wrapper {
  margin-left: 50px;
}
.button__add {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background-color: rgb(114, 207, 38);
  padding: 20px 30px;
  border: none;
  border-radius: 40px;
  margin-bottom: 50px;

  &:hover {
    transition: all 0.3s;
    cursor: pointer;
    color: rgb(124, 223, 43);
    background-color: rgb(88, 88, 88);
  }
  & span {
    margin-left: 30px;
  }
}
</style>