const billItemTypeRadioElem = document.querySelector(".billItemTypeRadio");
const radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");
const callTotalTwoElem = document.querySelector(".callTotalTwo");
const smsTotalTwoElem = document.querySelector(".smsTotalTwo");
const totalTwoElem = document.querySelector(".totalTwo");
const totalDisplayTwoElement = document.querySelector(".orange");

var callsTotal = 0;
var smsTotal = 0;
var totalBill = 0;

function RadioBillAddBtnClicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
    }

    if (billItemType === "call") {
        callsTotal += 2.75;
    } else if (billItemType === "sms") {
        smsTotal += 0.75;
    }

    totalBill = callsTotal + smsTotal;

    callTotalTwoElem.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotal.toFixed(2);
    totalTwoElem.innerHTML = totalBill.toFixed(2);

    if ((totalBill >= 30) && (totalBill < 50)) {
        totalDisplayTwoElement.classList.add("warning");
    } else if (totalBill >= 50) {
        totalDisplayTwoElement.classList.add("danger");
    }
}

radioBillAddBtnElem.addEventListener("click", RadioBillAddBtnClicked);