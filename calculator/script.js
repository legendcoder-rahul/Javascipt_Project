document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const input = document.querySelector('.input');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = '';
                input.value = '';
            } else if (value === '=') {
                if (operator && firstOperand !== '' && currentInput !== '') {
                    const result = calculate(parseFloat(firstOperand), parseFloat(currentInput), operator);
                    input.value = result;
                    currentInput = result;
                    operator = '';
                    firstOperand = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    operator = value;
                    firstOperand = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                input.value = currentInput;
            }
        });
    });

    function calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }
});