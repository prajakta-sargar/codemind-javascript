



// Addition
const addition = document.querySelector("#addition");
addition.addEventListener('click', () => {
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    alert(numOne + numTwo);
});

// Subtraction
const subtraction = document.querySelector("#subtraction");
subtraction.addEventListener('click', () => {
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    alert(numOne - numTwo);
});

// Multiplication
const multiplication = document.querySelector("#multiplication");
multiplication.addEventListener('click', () => {
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    alert(numOne * numTwo);
});

// Division
const division = document.querySelector("#division");
division.addEventListener('click', () => {
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    
    if (numTwo === 0) {
        alert("Cannot divide by zero.");
    } else {
        alert(numOne / numTwo);
    }
});