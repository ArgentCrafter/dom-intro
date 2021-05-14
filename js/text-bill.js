const billTypeTextElement = document.querySelector(".billTypeText");
const addToBillBtn = document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");
const totalDisplayOneElement = document.querySelector(".red");

let calculateText = domFunctions();

function addToBillBtnClicked() {
    calculateText.setTotalsOne(billTypeTextElement.value);

    callTotalOneElement.innerHTML = calculateText.getCallsTotalOne();
    smsTotalOneElement.innerHTML = calculateText.getSMSTotalOne();
    totalOneElement.innerHTML = calculateText.getTotalOne();

    totalDisplayOneElement.classList.remove("danger");
    totalDisplayOneElement.classList.remove("warning");
    totalDisplayOneElement.classList.add(calculateText.setClass(calculateText.getTotalOne()));
}

addToBillBtn.addEventListener("click", addToBillBtnClicked);