<template>
  <main class="wrapper">
    <section class="add">
      <div class="add__links">
        <a
          @click="goToPage('/add/payment', 'Entertainments', 2000)"
          class="add__link"
          href="#"
          >✚ Entertainments</a
        >
        <a
          @click="goToPage('/add/payment', 'Food', 200)"
          class="add__link"
          href="#"
          >✚ Food</a
        >
        <a
          @click="goToPage('/add/payment', 'Transport', 50)"
          class="add__link"
          href="#"
          >✚ Transport</a
        >
      </div>
    </section>
    <button class="button__add" @click="goToPage('/add/payment')">
      Add new cost <span>✚</span>
    </button>
    <section>
      <PaymentsDisplay :items="pageElements" />
      <div class="total__sum">
        <h3>Total sum = {{ getTotalSum }}</h3>
      </div>
    </section>
    <section>
      <Pagination
        :itemsLength="paymentsListLength"
        @changePage="changePage"
        :itemsOnPage="itemsOnPage"
        :currentPage="page"
      />
    </section>
  </main>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay,
    Pagination,
  },
  data() {
    return {
      itemsLength: 0,
      page: 1,
      itemsOnPage: 5,
      pageName: "",
      category: "Food",
      value: 10,
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList"]),
    ...mapActions({ fetchListData: "fetchData" }),

    changePage(p) {
      this.page = p;
    },

    addNewPaymentData(value) {
      this.addDataToPaymentList(value);
    },
    goToPage(page, category, value) {
      this.$router.push({
        name: page,
        params: {
          id: "1",
          category: category,
          value: value,
        },
      });
    },
  },
  computed: {
    ...mapGetters(["getFullPaymentValue"]),
    getTotalSum() {
      return this.getFullPaymentValue;
    },
    paymentsList() {
      return this.$store.getters.getPaymentsList;
    },
    paymentsListLength() {
      return this.$store.getters.getPaymentsList.length;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    pageElements() {
      const { itemsOnPage, page } = this;
      return this.paymentsList.slice(
        itemsOnPage * (page - 1),
        itemsOnPage * (page - 1) + itemsOnPage
      );
    },
  },
  created() {
    if (!this.fetchListData.length) {
      this.fetchListData();
    }
    this.$store.dispatch("fetchCategoryList");
  },
  mounted() {
    this.page = Number(this.$route.params.page) || 1;
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
  background-color: rgb(110, 196, 39);
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
.total__sum {
  border-top: 1px solid rgb(185, 185, 185);
  border-radius: 10px;
  min-width: 350px;
  max-width: 800px;
  text-align: center;
  padding: 30px 0;
  box-shadow: 0px -12px 10px -2px rgb(96, 96, 96, 0.1);
}
.add {
  height: 100px;
  &__links {
    //   height: 100px;
    padding: 20px 0;
    margin-bottom: 40px;
  }
  &__link {
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    background-color: rgb(114, 207, 38);
    padding: 20px;
    border: none;
    border-radius: 40px;
    margin-bottom: 50px;
    &:not(:last-child) {
      margin-right: 50px;
    }
    &:hover {
      transition: all 0.3s;
      cursor: pointer;
      color: rgb(124, 223, 43);
      background-color: rgb(88, 88, 88);
    }
  }
}
</style>