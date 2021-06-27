<template>
  <div>
    <input type="number" v-model.number="operand1" placeholder="operand1" />
    <input type="number" v-model.number="operand2" placeholder="operand2" />
    = {{ sum }}

    <div class="keyboard">
      <button v-on:click="sum = operand1 + operand2">+</button>
      <button v-on:click="sum = operand1 - operand2">-</button>
      <button @click="mult">*</button>
      <button @click="mult">=</button>
      <button @click="div(operand1, operand2)">/.</button>
      <button @click="exponentiation(operand1, operand2)">^</button>
      <button @click="intDiv(operand1, operand2)">/</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      sum: 0,
    };
  },
  methods: {
    mult() {
      this.sum = this.operand1 * this.operand2;
    },
    div(op1, op2) {
      this.sum = op1 / op2;
    },
    exponentiation(op1, op2) {
      this.sum = Math.pow(op1, op2);
    },
    intDiv(op1, op2) {
        this.sum = Math.floor(op1 / op2)
    }
  },
};
</script>

<style>
</style>