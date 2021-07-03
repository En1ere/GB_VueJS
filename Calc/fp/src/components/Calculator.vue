<template>
  <div class="calc">
    <input
      type="number"
      v-model.number="operand1"
      placeholder="operand 1"
      autofocus
    />
    <input type="number" v-model.number="operand2" placeholder="operand 2" />
    <div class="result">= {{ result }}</div>

    <div class="error" :class="{ red: error }" v-if="error">
      Ошибка! {{ error }}
    </div>

    <button
      class="operand"
      v-for="operand in operands"
      @click="calculate(operand)"
      :key="operand"
      v-bind:title="operand"
    >
      {{ operand }}
    </button>
    <input type="checkbox" id="displayKeys" v-model="keysOn" />
    <label for="displayKeys">Show keyboard</label>
    <div id="displayKeys" v-if="keysOn">
      {{ activeOperand }}
      <div>
        <input
          type="radio"
          name="operand"
          id="operand1"
          value="operand1"
          v-model="activeOperand"
        />
        <label for="operand1">operand 1</label>
        <input
          type="radio"
          name="operand"
          id="operand2"
          value="operand2"
          v-model="activeOperand"
        />
        <label for="operand2">operand 2</label>
      </div>
      <div class="keyboard">
        <button
          v-for="key in keyboard"
          @click="insertNumber(key)"
          :key="key"
          v-bind:title="key"
        >
          {{ key }}
        </button>
        <button @click="removeLastNumber()">←</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      keyboard: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      operands: ["+", "-", "/", "*", "^", "/."],
      operand1: 0,
      operand2: 0,
      result: 0,
      error: "",
      keysOn: false,
      activeOperand: "operand1",
    };
  },
  methods: {
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.intDivide();
          break;
        case "^":
          this.exponentiation();
          break;
        case "/.":
          this.divide();
          break;
      }
    },
    add() {
      this.result = this.operand1 + this.operand2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    divide() {
      const { operand1, operand2 } = this;

      if (operand2 === 0) {
        return (this.error = "Делить на 0 нельзя");
      }

      this.result = operand1 / operand2;
    },
    exponentiation() {
      const { operand1, operand2 } = this;
      this.result = Math.pow(operand1, operand2);
    },
    intDivide() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        return (this.error = "На 0 делить нельзя");
      }
      this.result = Math.floor(operand1 / operand2);
    },
    insertNumber(number) {
      if (this.activeOperand === "operand1") {
        return (this.operand1 += number);
      } else {
        return (this.operand2 += number);
      }
    },
    removeLastNumber() {
      this.error = "";

      if (this.activeOperand === "operand1") {
        return (this.operand1 = this.operand1.slice(0, -1));
      } else {
        return (this.operand2 = this.operand2.slice(0, -1));
      }
    },
  },
};
</script>

<style scoped>
button:hover {
  cursor: pointer;
  background-color: rgb(57, 72, 94);
  color: #4fbd82;
  transition: all 0.3s;
}
.red {
  color: red;
}
.result {
  margin: 20px 0;
  font-size: 30px;
  color: #4fbd82;
  text-shadow: #e0e0e0 1px 1px 0, 0px 1px 4px rgba(57, 72, 94);
}
.calc {
  font-size: 20px;
}
.calc input {
  padding: 10px;
  font-size: 20px;
}
.operand {
  padding: 10px;
  font-size: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.keyboard {
  margin: 20px auto;
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  outline: 1px solid black;
}
.keyboard button {
  padding: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 10px;
  font-size: 30px;
}
.operand:not(:last-child) {
  margin-right: 10px;
}
#showKeyboard {
  padding: 10px;
  font-size: 30px;
  margin-bottom: 20px;
  border: 2px solid #000;
  border-radius: 10px 100px / 120px;
}
</style>