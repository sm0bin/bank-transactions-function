// Deposit
document.getElementById('deposit').addEventListener('click', function () {
    const depositAmount = getInputValueById('deposit-amount');

    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Insert Valid Amount!");
        return;
    }

    const pastDepositAmount = getTextElementById('total-deposit');
    const totalDepositAmount = depositAmount + pastDepositAmount;
    setTextElementById('total-deposit', totalDepositAmount);

    // Balance Update
    const balanceAmount = getTextElementById('balance');
    const newBalanceAmount = depositAmount + balanceAmount;
    setTextElementById('balance', newBalanceAmount);
})

// Withdraw
document.getElementById('withdraw').addEventListener('click', function () {
    const withdrawAmount = getInputValueById('withdraw-amount');

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Insert Valid Amount!");
        return;
    }

    const pastWithdrawAmount = getTextElementById('total-withdraw');
    const totalWithdrawAmount = withdrawAmount + pastWithdrawAmount;
    setTextElementById('total-withdraw', totalWithdrawAmount);

    // Balance Update
    const balanceAmount = getTextElementById('balance');

    if (withdrawAmount > balanceAmount) {
        alert("Not Enough Money!");
        return;
    }

    const newBalanceAmount = balanceAmount - withdrawAmount;
    setTextElementById('balance', newBalanceAmount);
})