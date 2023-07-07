document.getElementById('btn-withdraw').addEventListener('click', function () {

    console.log("clicked");

    const withdrawAmount = document.getElementById('withdraw-input');
    const withdrawValue = parseFloat(withdrawAmount.value);

    withdrawAmount.value = '';

    const withdrawAmo = document.getElementById('withdraw-amount');
    const withdrawAmoTotal = parseFloat(withdrawAmo.innerText);

    const withdrawTotal = withdrawAmoTotal + withdrawValue;

    withdrawAmo.innerText = withdrawTotal;


    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const balanceAmountvalue = parseFloat(balanceAmountString);

    balanceAmount.innerText = balanceAmountvalue - withdrawValue;


    console.log(withdrawValue);
})