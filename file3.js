const display = document.getElementById('display');  
const buttons = document.querySelectorAll('button');  
  
let currentNumber = '';  
let previousNumber = '';  
let operator = '';  
  
buttons.forEach(button => {  
   button.addEventListener('click', () => {  
      const id = button.id;  
  
      if (id === 'clear') {  
        clearDisplay();  
      } else if (id === 'backspace') {  
        backspace();  
      } else if (id === 'equals') {  
        calculateResult();  
      } else if (id === 'add' || id === 'subtract' || id === 'multiply' || id === 'divide') {  
        selectOperator(id);  
      } else {  
        appendNumber(id);  
      }  
   });  
});  
  
function clearDisplay() {  
   display.value = '';  
   currentNumber = '';  
   previousNumber = '';  
   operator = '';  
}  
  
function backspace() {  
   currentNumber = currentNumber.slice(0, -1);  
   display.value = currentNumber;  
}  
  
function calculateResult() {  
   const num1 = parseFloat(previousNumber);  
   const num2 = parseFloat(currentNumber);  
  
   let result;  
  
   switch (operator) {  
      case 'add':  
        result = num1 + num2;  
        break;  
      case 'subtract':  
        result = num1 - num2;  
        break;  
      case 'multiply':  
        result = num1 * num2;  
        break;  
      case 'divide':  
        result = num1 / num2;  
        break;  
      default:  
        result = 0;  
   }  
  
   display.value = result;  
   currentNumber = result.toString();  
   previousNumber = '';  
   operator = '';  
}  
  
function selectOperator(id) {  
   previousNumber = currentNumber;  
   currentNumber = '';  
   operator = id;  
}  
  
function appendNumber(id) {  
   currentNumber += id.replace('zero', '0').replace('one', '1').replace('two', '2').replace('three', '3').replace('four', '4').replace('five', '5').replace('six', '6').replace('seven', '7').replace('eight', '8').replace('nine', '9').replace('decimal', '.');  
   display.value = currentNumber;  
}
