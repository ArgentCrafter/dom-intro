function domFunctions(){
    var calcString;

    function setCalcString(calcBillString){
        calcString = calcBillString;
    }

    function calculateBill(){
        var billItems = calcString.split(",");
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
        return billTotal.toFixed(2);
    }

    function setCalcClass(roundedBillTotal){
        if (roundedBillTotal >= 30) {
            return "danger"
        } else if ((roundedBillTotal >= 20) && (roundedBillTotal < 30)) {
            return "warning"
        } else {
            return ""
        }
    }

    return{
        calculateBill,
        setCalcString,
        setCalcClass
    }
};