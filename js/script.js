const screen = document.getElementById('output');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const calculateButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');




let currentInput = '';

backspaceButton.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    screen.textContent = currentInput || '0';
});

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        screen.textContent = currentInput;
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += ` ${button.textContent} `;
        screen.textContent = currentInput;
    });
});

calculateButton.addEventListener('click', () => {
    try {
        const result = eval(currentInput);
        screen.textContent = result;
        currentInput = result.toString();
    } catch (error) {
        screen.textContent = 'Error';
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    screen.textContent = '0';
});
