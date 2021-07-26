<template>
  <div>
    <canvas height="200" id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "Chart",
  props: ["items"],
  watch: {
    items: function (el1) {
      this.calculateSortedTotalValue(el1);
      this.getSortedCategoriesList();
      this.sortValues(el1);
      this.myPieChart = new Chart(this.ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [
                this.calculateSortedTotalValue(this.arrAccessories),
                this.calculateSortedTotalValue(this.arrEducation),
                this.calculateSortedTotalValue(this.arrEntertainments),
                this.calculateSortedTotalValue(this.arrFood),
                this.calculateSortedTotalValue(this.arrGifts),
                this.calculateSortedTotalValue(this.arrInternet),
                this.calculateSortedTotalValue(this.arrSport),
                this.calculateSortedTotalValue(this.arrTransport),
              ],
              backgroundColor: [
                "rgb(25, 45, 255)",
                "rgb(66, 161, 255)",
                "rgb(148, 66, 255)",
                "rgb(199, 253, 255)",
                "teal",
                "rgb(104, 168, 59)",
                "rgb(25, 255, 67)",
                "rgb(247, 201, 255)",
              ],
            },
          ],
          labels: this.categoriesList,
        },
        options: {
          cutoutPercentage: 50,
          legend: { position: "right", labels: { fontSize: 16 } },
        },
      });
    },
  },
  data() {
    return {
      ctx: "",
      myPieChart: "",
      arr: [],
      categoriesList: [],
      sum: 0,
      arrFood: [],
      arrTransport: [],
      arrEducation: [],
      arrInternet: [],
      arrSport: [],
      arrAccessories: [],
      arrGifts: [],
      arrEntertainments: [],
    };
  },
  methods: {
    calculateSortedTotalValue(array) {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum;
    },
    getSortedCategoriesList() {
      this.items.forEach((el) => {
        this.arr.push(el.category);
      });
      this.categoriesList = [...new Set(this.arr)];
    },
    sortValues(array) {
      array.forEach((el) => {
        switch (el.category) {
          case "Food":
            this.arrFood.push(el.value);
            break;
          case "Transport":
            this.arrTransport.push(el.value);
            break;
          case "Education":
            this.arrEducation.push(el.value);
            break;
          case "Internet":
            this.arrInternet.push(el.value);
            break;
          case "Sport":
            this.arrSport.push(el.value);
            break;
          case "Accessories":
            this.arrAccessories.push(el.value);
            break;
          case "Gifts":
            this.arrGifts.push(el.value);
            break;
          case "Entertainments":
            this.arrEntertainments.push(el.value);
            break;
        }
      });
    },
  },
  mounted() {
    this.sortValues(this.items);
    this.getSortedCategoriesList();
    this.ctx = document.getElementById("myChart").getContext("2d");
    this.myPieChart = new Chart(this.ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [
              this.calculateSortedTotalValue(this.arrAccessories),
              this.calculateSortedTotalValue(this.arrEducation),
              this.calculateSortedTotalValue(this.arrEntertainments),
              this.calculateSortedTotalValue(this.arrFood),
              this.calculateSortedTotalValue(this.arrGifts),
              this.calculateSortedTotalValue(this.arrInternet),
              this.calculateSortedTotalValue(this.arrSport),
              this.calculateSortedTotalValue(this.arrTransport),
            ],
            backgroundColor: [
              "rgb(25, 45, 255)",
              "rgb(66, 161, 255)",
              "rgb(148, 66, 255)",
              "rgb(199, 253, 255)",
              "teal",
              "rgb(104, 168, 59)",
              "rgb(25, 255, 67)",
              "rgb(247, 201, 255)",
            ],
          },
        ],
        labels: this.categoriesList,
      },
      options: {
        cutoutPercentage: 50,
        legend: { position: "right", labels: { fontSize: 16 } },
      },
    });
  },
};
</script>

<style>
</style>