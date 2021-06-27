<template>
  <div>
    <input type="number" v-model.number="operand1" placeholder="operand1" />
    <input type="number" v-model.number="operand2" placeholder="operand2" />
    = {{ result }}

    <div class="keyboard">
      <button v-on:click="result = operand1 + operand2">+</button>
      <button v-on:click="result = operand1 - operand2">-</button>
      <button @click="mult">*</button>
      <button @click="mult">=</button>
      <button @click="div(operand1, operand2)">/.</button>
      <button @click="exponentiation(operand1, operand2)">^</button>
      <button @click="intDiv(operand1, operand2)">/</button>
    </div>
    {{ error }}
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      error: "",
    };
  },
  methods: {
    mult() {
      this.result = this.operand1 * this.operand2;
    },
    div(op1, op2) {
      const { operand1 } = this;
      if (operand1 === 0) {
        this.error = "На 0 делить нельзя";
      }
      this.result = op1 / op2;
    },
    exponentiation(op1, op2) {
      this.result = Math.pow(op1, op2);
    },
    intDiv(op1, op2) {
      const { operand1 } = this;
      if (operand1 === 0) {
        this.error = "На 0 делить нельзя";
      }
      this.result = Math.floor(op1 / op2);
    },
  },
};
</script>

<style>
</style>