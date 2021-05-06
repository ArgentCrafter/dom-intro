const billItemTypeRadioElem = document.querySelector(".billItemTypeRadio");
const radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");
const callTotalTwoElem = document.querySelector(".callTotalTwo");
const smsTotalTwoElem = document.querySelector(".smsTotalTwo");
const totalTwoElem = document.querySelector(".totalTwo");
const totalDisplayTwoElement = document.querySelector(".orange");

var callsTotalThree = 0;
var smsTotalThree = 0;
var totalBillThree = 0;

function RadioBillAddBtnClicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
    }

    if (billItemType === "call") {
        callsTotalThree += 2.75;
    } else if (billItemType === "sms") {
        smsTotalThree += 0.75;
    }

    totalBillThree = callsTotalThree + smsTotalThree;

    callTotalTwoElem.innerHTML = callsTotalThree.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotalThree.toFixed(2);
    totalTwoElem.innerHTML = totalBillThree.toFixed(2);

    if ((totalBillThree >= 30) && (totalBillThree < 50)) {
        totalDisplayTwoElement.classList.add("warning");
    } else if (totalBillThree >= 50) {
        totalDisplayTwoElement.classList.add("danger");
    }
}

radioBillAddBtnElem.addEventListener("click", RadioBillAddBtnClicked);