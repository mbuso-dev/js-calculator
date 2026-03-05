//Calculator Logic added here
// Select the display elements from the DOM
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');

// Append a number or operator to the current display
function appendToDisplay(input) {
  if (currentOperand.textContent === '0') {
    // Replace the default 0 with the first input
    currentOperand.textContent = input;
  } else {
    // Add input to whatever is already on the display
    currentOperand.textContent += input;
  }
}

// Clear both displays and reset to 0
function clearDisplay() {
  currentOperand.textContent = '0';
  previousOperand.textContent = '';
}

// Delete the last character typed
function deleteLast() {
  // If only one character left, reset to 0 instead of leaving it empty
  currentOperand.textContent = currentOperand.textContent.slice(0, -1) || '0';
}

// Evaluate the expression and show the result
function calculate() {
  try {
    // Show the original expression in the previous operand display
    previousOperand.textContent = currentOperand.textContent + ' =';
    // Evaluate and show the result
    currentOperand.textContent = eval(currentOperand.textContent);
  } catch {
    // If the expression is invalid, show an error
    currentOperand.textContent = 'Error';
  }
}

// Wire up the C and DEL buttons to their functions
document.querySelector('.clear').addEventListener('click', clearDisplay);
document.querySelector('.delete').addEventListener('click', deleteLast);