console.log("util");

function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

function getElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValue = parseFloat(elementField.innerText);

    return elementValue;
}
function setElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;



}