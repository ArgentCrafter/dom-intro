const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const billStringElement = document.querySelector(".billString");
const totalElement = document.querySelector(".total");

function calculateBtnClicked(){
    var billString = billStringElement.value;
    var billItems = billString.split(",");
    var billTotal = 0;

    for (var i = 0; i < billItems.length; i++){
        var billItem = billItems[i].trim();

        if (billItem === "call") {
            billTotal += 2.75;
        }
        else if (billItem === "sms") {
            billTotal += 0.75;
        }

    }

    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    if (roundedBillTotal >= 30) {
        totalElement.classList.remove("warning");
        totalElement.classList.add("danger");
    } else if ((roundedBillTotal >= 20) && (roundedBillTotal < 30)) {
        totalElement.classList.remove("danger");
        totalElement.classList.add("warning");
    } else {
        totalElement.classList.remove("danger");
        totalElement.classList.remove("warning");
    }
}

calculateBtn.addEventListener('click', calculateBtnClicked);