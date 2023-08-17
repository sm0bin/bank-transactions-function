function getTextElementById(textFieldId) {
    const textField = document.getElementById(textFieldId);
    const textFieldElement = parseFloat(textField.innerText);
    return textFieldElement;

}


function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldElement = parseFloat(inputField.value);
    inputField.value = "";
    return inputFieldElement;

}

function setTextElementById(setTextFieldId, newElement) {
    const setTextField = document.getElementById(setTextFieldId);
    setTextField.innerText = newElement;
}
