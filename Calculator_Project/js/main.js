const Calculator = {
    displayValue: '0',
    firstOperand: null,
    waitSecondOperand: false,
    operator: null,
  };

  //modifies values each time a button is pressed
  function inputDigit(digit) {
      const { displayValue, waitSecondOperand } = Calculator;
      if (waitSecondOperand === true) {
          Calculator.displayValue = digit;
          Calculator.waitSecondOperand = false;
      } else {
          //overwrites displayValue if the value is 0, otherwise adds onto it
          Calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
      }
  }

  //checking for and/or adding a decimal point
  function inputDecimal(dot) {
      if (Calculator.waitSecondOperand === true) return;
      //if displayValue does not include a decimal, add one
      if (!Calculator.displayValue.includes(dot)) {
          Calculator.displayValue += dot;
      }
  }

  function handleOperator(nextOperator) {
      //if there is nothing currently in first operand we will convert the number and input it
      const { firstOperand, displayValue, operator } = Calculator
      const valueOfInput = parseFloat(displayValue);

      if (operator && Calculator.waitSecondOperant) {
          Calculator.operator = nextOperator;
          return;
      }
      if(firstOperand == null) {
          Calculator.firstOperand = valueOfInput;
      } else if (operator) { //checking to see if operator exists
        const valueNow = firstOperand || 0;
        let result = performCalculation[operator](valueNow, valueOfInput);
        result = Number(result).toFixed(9)
        result = (result * 1).toString()
        Calculator.displayValue = parseFloat(result);
        Calculator.firstOperand = parseFloat(result);
      }
      Calculator.waitSecondOperand = true;
      Calculator.operator = nextOperator;
  }

  const performCalculation = {
      '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
      '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
      '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
      '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
      '=': (firstOperand, secondOperand) => secondOperand,
  }

  //Resetting all the values when called on
  function calculatorReset() {
      Calculator.displayValue = '0';
      Calculator.firstOperand = null;
      Calculator.waitSecondOperand = false;
      Calculator.operator = null;
  }

  //Updates the screen with the contents of displayValue
  function updateDisplay() {
      const display = document.querySelector('.calculatorScreen');
      display.value = Calculator.displayValue;
  }

  //Function to update the display
  updateDisplay ();
  const keys = document.querySelector('.calculatorKeys');
  keys.addEventListener('click', (event) => {
      const { target } = event;

      if (!target.matches('button')) {
          return;
      }

      if (target.classList.contains('operator')) {
          handleOperator(target.value);
          updateDisplay();
          return;
      }

      if (target.classList.contains('decimal')) {
          inputDecimal(target.value);
          updateDisplay();
          return;
      }

      if (target.classList.contains('all-clear')) {
          calculatorReset();
          updateDisplay();
          return;
      }

      inputDigit(target.value);
      updateDisplay();
  })