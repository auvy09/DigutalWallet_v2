document.getElementById("btn-deposit").addEventListener("click", function () {

    const depositInput = document.getElementById("deposit-input");
    const depositInputString = depositInput.value;
    const depositInputValue = parseFloat(depositInputString);
    depositInput.value = '';
    console.log(depositInputValue);


    const depositAmount = document.getElementById("deposit-amount");
    const depositAmountString = depositAmount.innerText;
    const depositAmountValue = parseFloat(depositAmountString);


    const depositTotal = depositAmountValue + depositInputValue;

    depositAmount.innerText = depositTotal;




    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const balanceAmountvalue = parseFloat(balanceAmountString);


    const balanceTotal = balanceAmountvalue + depositInputValue
    balanceAmount.innerText = balanceTotal;

})