console.log("depositInputValue");


document.getElementById("btn-deposit").addEventListener("click", function () {


    const newDepositAmount = getInputValueById("deposit-input");

    const previousDepositTotal = getElementValueById("deposit-amount");

    // console.log(newDepositAmount);
    // console.log(previousDepositTotal);

    const depositTotal = newDepositAmount + previousDepositTotal;

    setElementValueById('deposit-amount', depositTotal);


    const previousBalanceTotal = getElementValueById("balance-amount");

    const balanceTotal = newDepositAmount + previousBalanceTotal;

    setElementValueById("balance-amount", balanceTotal);


})