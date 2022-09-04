

const add = document.querySelector('.add');
const equals = document.querySelector('.equals');
const calculatorDisplay = document.querySelector('.calculator-display');










// basic math operators
function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}


//operate function
function operate(operator, num1, num2) {
    if(operator === "+") {
        return addition(num1, num2);
    }
    else if(operator === "-") {
        return subtraction(num1, num2);
    }
    else if(operator === "*") {
        return multplication(num1, num2);
    }
    else {
        return division(num1, num2);
    }
}



//number display
const currentPressedNumber = document.querySelectorAll('.number');

currentPressedNumber.forEach(number => {
    number.addEventListener('click', () => {
        for(let i = 0; i < 10; i++) {
            if(number.textContent === `${i}`) {
                calculatorDisplay.textContent = i;
            }

        }
    });
});

















