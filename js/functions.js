function domFunctions(){
    var calcString;
    var callsTotal = 0;
    var smsTotal = 0;

    function setCalcString(calcBillString){
        calcString = calcBillString;
    }

    function setTotalsOne(input){
        if (input === "call") {
            callsTotal += 2.75;
        } else if (input === "sms") {
            smsTotal += 0.75;
        }
    }

    function getCallsTotalOne(){
        return callsTotal.toFixed(2);
    }

    function getSMSTotalOne(){
        return smsTotal.toFixed(2);
    }

    function getTotalOne(){
        return callsTotal + smsTotal;
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
        setCalcClass,
        getCallsTotalOne,
        getSMSTotalOne,
        getTotalOne,
        setTotalsOne
    }
};