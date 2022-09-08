
const equalBtn = document.querySelector('.equals');
const calculatorDisplay = document.querySelector('.calculator-display');
const clearBtn = document.querySelector('.clear');
const pressedNumber = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const powerButton = document.querySelector('.logo');
const buttons = document.querySelector('.buttons');
const calcBody = document.querySelector('.calculator');
const decimalBtn = document.querySelector('.decimal');
const negativeBtn = document.querySelector('.negative');



// basic math operator function
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
    if(operator === 'add') {       
        finalValue = addition(num1, num2);
    }
    else if(operator === 'sub') {
        finalValue = subtraction(num1, num2);
    }
    else if(operator === 'mul') {
        finalValue = multplication(num1, num2);
    }
    else if(operator === 'div') {
        finalValue = division(num1, num2);
    }
    return finalValue;
}


let displayValue = '0';
let isbuttonPressed = false;
calculatorDisplay.textContent = displayValue;

pressedNumber.forEach(item => {
    item.addEventListener('click', () => {
        for(let i = 0; i < 10; i++) {
            if(displayValue === '0') {
                displayValue = "";
            }
            if(item.textContent == i) {
             displayValue += `${i}`;   
            }
        }
        calculatorDisplay.textContent = displayValue;
        if(isbuttonPressed == false) {
            operation.firstValue = displayValue;

        }
        else {
            operation.secondValue = displayValue;

        }
    });
});

// object operation
let operation = {firstValue: undefined, operator: undefined, secondValue: undefined};

operatorBtns.forEach(b => {
    b.addEventListener('click', () => {
        if(operation.firstValue !== undefined && operation.secondValue !== undefined) {
            displayValue = operate(operation.operator, operation.firstValue, operation.secondValue);
            calculatorDisplay.textContent = displayValue;
            operation.firstValue = displayValue;
            isbuttonPressed = true;
            operation.secondValue = undefined;
            displayValue = '0';
        }  
        if(b.textContent == '+') {
            operation.operator = 'add';
        }
        else if(b.textContent == '-') {
            operation.operator = 'sub';
        }
        else if(b.textContent == '*') {
            operation.operator = 'mul';
        }
        else {
            operation.operator = 'div';
        }
        
        displayValue = "";
        isbuttonPressed = true;
        
    });
})



// Equal Button functionality
equalBtn.addEventListener('click', () => {
    if(operation.firstValue !== undefined && operation.secondValue !== undefined) {
        displayValue = operate(operation.operator, operation.firstValue, operation.secondValue);
        calculatorDisplay.textContent = displayValue;
        isbuttonPressed= false;
        displayValue = "0";
        operation = {firstValue: undefined, operator: undefined, secondValue: undefined};


    }  
});


decimalBtn.addEventListener('click', () => {
    let isDecimalPresent = false; 
    let checkDecimalExist = displayValue.split('');
    for(let i = 0; i < checkDecimalExist.length; i++) {
        if(checkDecimalExist[i] == '.'){
            isDecimalPresent = true;
        }
    }
    if(isDecimalPresent == false) {
        displayValue += '.';
    }
});

negativeBtn.addEventListener('click', () => {
    displayValue = '-';
});



// clears and reset everything
clearBtn.addEventListener('click', ()=> {
    displayValue = "0";
    isbuttonPressed = false;
    calculatorDisplay.textContent = displayValue
    operation = {firstValue: undefined, operator: undefined, secondValue: undefined};
});



// // Power Button 
let isPowerButtonClick = true;
powerButton.addEventListener('click', () => {
    if(isPowerButtonClick === true) {
        calculatorDisplay.setAttribute('style', 'background-color: black;');
        isPowerButtonClick = false;
    }
    else {
        calculatorDisplay.style.backgroundColor = "";
        isPowerButtonClick = true;
    }
})


