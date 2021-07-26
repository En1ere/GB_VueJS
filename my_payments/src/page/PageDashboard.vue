<template >
  <v-row>
    <v-col cols="6">
      <div class="text-h5 text-md-3 pb-4">My personal costs</div>

      <v-btn color="teal" @click="showPaymentsForm" dark class="mb-2"
        >ADD NEW COST <v-icon class="pl-2">mdi-plus</v-icon></v-btn
      >

      <PaymentsDisplay
        @editPayment="editPayment"
        @deletePayment="deletePayment"
        :items="pageElements"
      />
    </v-col>
    <v-col cols="6">
      <Chart :items="getSortedItemsList" />
      <h2 class="teal--text mt-16">Total: {{ getTotalSum }} ₽</h2>
    </v-col>
    <Pagination
      :itemsLength="paymentsListLength"
      @changePage="changePage"
      :itemsOnPage="itemsOnPage"
      :currentPage="page"
    />
  </v-row>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
import Chart from "../components/Chart.vue";
export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay,
    Pagination,
    Chart,
  },
  data() {
    return {
      itemsLength: 0,
      page: 1,
      itemsOnPage: 5,
      pageName: "",
      category: "Food",
      value: 10,
      curItemId: Number,
      dialog: false,
      itemsList: [],
      categoriesList: [],
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData", "deleteDataFromPaymentList"]),
    ...mapActions({ fetchListData: "fetchData" }),

    changePage(p) {
      this.page = p;
    },
    showEditForm(item) {
      this.$modal.show("edit", {
        header: "Edit My Payment",
        compName: "EditPaymentForm",
        category: this.categoryList,
        curItem: item,
      });
    },
    editPayment(targetItem) {
      this.curItemId = +targetItem;
      this.showEditForm(this.pageElements[this.curItemId]);
    },
    deletePayment(targetItem) {
      this.curItemId = +targetItem;
      this.deleteDataFromPaymentList(this.curItemId);
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
    showPaymentsForm() {
      this.$modal.show("add", {
        header: "Add My Cost",
        compName: "AddPaymentForm",
        category: this.categoryList,
        curItem: {
          id: 0,
          category: "",
          value: 0,
          date: "",
        },
      });
    },
  },
  computed: {
    ...mapGetters(["getFullPaymentValue"]),
    getTotalSum() {
      return this.getFullPaymentValue;
    },
    getSortedItemsList() {
      return this.$store.getters.getSortedPaymentList;
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
    this.getSortedItemsList;
  },
  mounted() {
    this.page = Number(this.$route.params.page) || 1;
  },
};
</script>

<style>
</style>