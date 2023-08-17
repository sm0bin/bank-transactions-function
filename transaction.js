// const x = document.getElementById("deposit").addEventListener("click", getTextElementById('deposit'));
// console.log(x);


// y = getInputValueById('deposit-amount');
// console.log('wor')

document.getElementById('deposit').addEventListener('click', function () {
    const depositAmount = getInputValueById('deposit-amount');
    const pastDepositAmount = getTextElementById('total-deposit');
    const totalDepositAmount = depositAmount + pastDepositAmount;
    const balanceAmount = getTextElementById('balance');
    const newBalanceAmount = depositAmount + balanceAmount;
    setTextElementById('total-deposit', totalDepositAmount);
    setTextElementById('balance', newBalanceAmount);
})