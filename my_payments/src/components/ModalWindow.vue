<template>
  <v-card min-height="12">
    <v-row justify="center">
      <v-overlay :z-index="zIndex">
        <v-card-text>
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
          <v-btn
            block
            color="teal"
            class="text-subtitle-1 px-6"
            dark
            @click="onCloseClick"
            >Close</v-btn
          >
        </v-card-text>
      </v-overlay>
    </v-row>
  </v-card>
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
      overlay: false,
      zIndex: 100,
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

<style>
</style>