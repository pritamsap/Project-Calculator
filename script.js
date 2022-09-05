const add = document.querySelector('.add');
const equals = document.querySelector('.equals');
const calculatorDisplay = document.querySelector('.calculator-display');
const clear = document.querySelector('.clear');
const pressedNumber = document.querySelectorAll('.number');


// basic math operators
function addition(num1, num2) {
    return Number(num1) + Number(num2);
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
    let finalValue = 0;
    if(operator === "add") {       
        finalValue = addition(num1, num2);
    }
    else if(operator === "sub") {
        finalValue = subtraction(num1, num2);
    }
    else if(operator === "mul") {
        finalValue = multplication(num1, num2);
    }
    else {
        finalValue = division(num1, num2);
    }
    return finalValue;
}

let firstValue = 0;
let lastValue = 0;
let isfirstNumber = true;
pressedNumber.forEach(item => {
    item.addEventListener('click', () => {

        if(isfirstNumber) {
            for(let i = 0; i < 10; i++) {
                if(item.textContent == i) {
                    calculatorDisplay.textContent += i;
                    firstValue += "" + i;
                }
            }
        }
        else {
            for(let i = 0; i < 10; i++) {
                if(item.textContent == i) {
                    calculatorDisplay.textContent += i;
                    lastValue += "" + i;
                }
            }
        }

    });
});


// add Events on Equals and operator expression
add.addEventListener('click', () => {
    calculatorDisplay.textContent = "";
    isfirstNumber = false;
})

equals.addEventListener('click', () => {
    calculatorDisplay.textContent = operate("add", firstValue, lastValue);
    isfirstNumber = true;
})

clear.addEventListener('click', () => {
    calculatorDisplay.textContent = 0;
    firstValue = 0;
    lastValue = 0;
})










