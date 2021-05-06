const billTypeTextElement = document.querySelector(".billTypeText");
const addToBillBtn = document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");
const totalDisplayOneElement = document.querySelector(".red");

var callsTotal = 0;
var smsTotal = 0;
var totalBill = 0;

function addToBillBtnClicked() {
    var input = billTypeTextElement.value;

    if (input === "call") {
        callsTotal += 2.75;
    } else if (input === "sms") {
        smsTotal += 0.75;
    }

    totalBill = callsTotal + smsTotal;

    callTotalOneElement.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
    totalOneElement.innerHTML = totalBill.toFixed(2);

    if ((totalBill >= 30) && (totalBill < 50)) {
        totalDisplayOneElement.classList.add("warning");
    } else if (totalBill >= 50) {
        totalDisplayOneElement.classList.add("danger");
    }
}

addToBillBtn.addEventListener("click", addToBillBtnClicked);