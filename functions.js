function getTextElementById(textFieldId) {
    const textFieldString = document.getElementById(textFieldId);
    const textFieldElement = parseFloat(textFieldString.innerText);
    return textFieldElement;

}


function getInputValueById(inputFieldId) {
    const inputFieldString = document.getElementById(inputFieldId);
    const inputFieldElement = parseFloat(inputFieldString.value);
    inputFieldId.value = "hola";
    return inputFieldElement;

}

function setTextElementById(setTextFieldId, newElement) {
    const setTextField = document.getElementById(setTextFieldId);
    setTextField.innerText = newElement;
}


y = getInputValueById('deposit-amount');
console.log(y)
// console.log('paisi')