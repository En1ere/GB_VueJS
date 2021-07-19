<template>
  <div class="wrapper">
    <div class="window">
      <div class="header">
        <h3 class="header__text">{{ settings.header }}</h3>
      </div>
      <div class="content">
        <component
          @addNewPayment="addNewPaymentData"
          @editPayment="editPaymentData"
          :is="settings.compName"
          :date="date"
          :categoryList="settings.category"
          :curValue="settings.curItem.value"
          :curCategory="settings.curItem.category"
          :curDate="settings.curItem.date"
        />
      </div>
      <div class="footer">
        <button class="close__button" @click="onCloseClick">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
import EditPaymentForm from "./EditPaymentForm.vue";
import { mapMutations } from "vuex";
export default {
  name: "ModalWindow",
  components: {
    AddPaymentForm,
    EditPaymentForm,
  },
  props: {
    settings: {
      type: Object,
    },
  },
  data() {
    return {
      date: new Date(),
    };
  },
  methods: {
    ...mapMutations(["addDataToPaymentList", "editPaymentList"]),
    addNewPaymentData(value) {
      this.addDataToPaymentList(value);
    },
    editPaymentData(el) {
      this.editPaymentList(el);
    },
    onCloseClick() {
      this.$modal.hide();
    },
  },
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 100vh;
  background: rgb(0, 0, 0, 0.9);
}
.content {
  margin: 0 auto;
}
.window {
  margin-top: 100px;
  height: 650px;
  background-color: rgb(255, 255, 255);
  opacity: 1;
  padding: 0 40px;
  border-radius: 50px;
}
.header {
  &__text {
    text-align: center;
    padding: 50px 0 50px 0;
    font-size: 36px;
  }
}
.close__button {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background-color: rgb(110, 196, 39);
  padding: 20px;
  border: none;
  border-radius: 40px;
  width: 450px;
  &:hover {
    transition: all 0.3s;
    cursor: pointer;
    color: rgb(110, 196, 39);
    background-color: rgb(88, 88, 88);
  }
}
</style>