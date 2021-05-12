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

    totalDisplayOneElement.classList.add(calculateText.setCalcClass(calculateText.getTotalOne()));
}

addToBillBtn.addEventListener("click", addToBillBtnClicked);
// if ((totalBill >= 30) && (totalBill < 50)) {
    //     totalDisplayOneElement.classList.add("warning");
    // } else if (totalBill >= 50) {
    //     totalDisplayOneElement.classList.add("danger");
    // }