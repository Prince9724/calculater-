
const container = document.getElementById("container");
const number1_input = document.getElementById("number-1");
const number2_input = document.getElementById("number-2");
const multiply_button_input = document.getElementById("multiply");
const divide_button_input = document.getElementById("divide");
const adition_button_input = document.getElementById("adition");
const subtraction_button_input = document.getElementById("subtraction");

const result = document.getElementById("result");


number1_input.setAttribute("inputmode", "numeric");
number1_input.setAttribute("pattern", "[0-9]*");

number2_input.setAttribute("inputmode", "numeric");
number2_input.setAttribute("pattern", "[0-9]*");
const onlyNumber = (e) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
};

number1_input.addEventListener("input", onlyNumber);
number2_input.addEventListener("input", onlyNumber);


const multiplication = () => {
    let num1 = Number(number1_input.value);
    let num2 = Number(number2_input.value);
    if (number1_input.value === "" || number2_input.value === "") {
        result.innerText = "Please Enter both number."
        return;
    }
    let multiply = num1 * num2;
    result.innerText = multiply;

}

const division = () => {
    let num1 = Number(number1_input.value);
    let num2 = Number(number2_input.value);

    if (number1_input.value === "" || number2_input.value === "") {
        result.innerText = "Please Enter both number."
        return;
    }
    if (num2 === 0) {
        result.innerText = "can't divide by 0 ";
        return;
    }
    let divide = num1 / num2;
    result.innerText = divide;

}

const add = () => {
    let num1 = Number(number1_input.value);
    let num2 = Number(number2_input.value);

    if (number1_input.value === "" || number2_input.value === "") {
        result.innerText = "Please Enter both number."
        return;
    }
    let addition = num1+num2;
    result.innerText = addition;


}
const subtract = () => {
    let num1 = Number(number1_input.value);
    let num2 = Number(number2_input.value);

    if (number1_input.value === "" || number2_input.value === "") {
        result.innerText = "Please Enter both number."
        return;
    }
    let subtract = num1-num2;
    result.innerText = subtract;
}

multiply_button_input.addEventListener("click", multiplication);
divide_button_input.addEventListener("click", division);
adition_button_input.addEventListener("click", add);
subtraction_button_input.addEventListener("click", subtract);



