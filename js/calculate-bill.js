const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const billStringElement = document.querySelector(".billString");
const totalElement = document.querySelector(".total");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
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

    if ((roundedBillTotal >= 20) && (roundedBillTotal < 30)) {
        totalElement.classList.add("warning");
    } else if (roundedBillTotal >= 30) {
        totalElement.classList.add("danger");
    } else {
        totalElement.classList.remove("danger");
        totalElement.classList.remove("warning");
    }
}
//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBtnClicked);