const billItemTypeRadioElem = document.querySelector(".billItemTypeRadio");
const radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");
const callTotalTwoElem = document.querySelector(".callTotalTwo");
const smsTotalTwoElem = document.querySelector(".smsTotalTwo");
const totalTwoElem = document.querySelector(".totalTwo");
const totalDisplayTwoElement = document.querySelector(".orange");

let calculateRad = domFunctions();

function RadioBillAddBtnClicked() {

    calculateRad.calculateRadio(document.querySelector("input[name='billItemType']:checked"));

    callTotalTwoElem.innerHTML = calculateRad.getCallsTotalTwo();
    smsTotalTwoElem.innerHTML = calculateRad.getSMSTotalTwo();
    totalTwoElem.innerHTML = calculateRad.getTotalTwo();

    totalDisplayTwoElement.classList.remove("danger");
    totalDisplayTwoElement.classList.remove("warning");
    totalDisplayTwoElement.classList.add(calculateRad.setClass(calculateRad.getTotalTwo()));
}

radioBillAddBtnElem.addEventListener("click", RadioBillAddBtnClicked);