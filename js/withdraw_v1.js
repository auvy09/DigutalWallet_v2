console.log("depositInputValue");

document.getElementById("btn-withdraw").addEventListener("click", function () {


    const newWithdrawAmount = getInputValueById("withdraw-input");

    const previousWithdrawTotal = getElementValueById("withdraw-amount");

    // console.log(newDepositAmount);
    // console.log(previousDepositTotal);

    const withdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    setElementValueById('withdraw-amount', withdrawTotal);


    const previousTotal = getElementValueById("balance-amount");

    const balanceTotalFinal = previousTotal - newWithdrawAmount;

    setElementValueById("balance-amount", balanceTotalFinal);


})