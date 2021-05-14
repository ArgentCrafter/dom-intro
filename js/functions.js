function domFunctions(){
    var calcString;

    var callsTotal = 0;
    var smsTotal = 0;

    var callsTotalTwo = 0;
    var smsTotalTwo = 0;
    var totalBillTwo = 0;

    var callsTotalThree = 0;
    var smsTotalThree = 0;

    var callCost = 0;
    var smsCost = 0;
    var warningLevel = 0;
    var criticalLevel = 0;

    var billItemTypeOne = "";
    var billItemTypeTwo = "";

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

    function calculateRadio(){
        if (billItemTypeOne === "call") {
            callsTotalTwo+= 2.75;
        } else if (billItemTypeOne === "sms") {
            smsTotalTwo += 0.75;
        }
    }

    function calculateSettings(){
        if (totalBillTwo < criticalLevel){
            if (billItemTypeTwo === "call") {
                callsTotalThree += callCost;
            } else if (billItemTypeTwo === "sms") {
                smsTotalThree += smsCost;
                    }       
            }
    }

    function setBillItemTypeOne(checkedRadioBtn){
        if (checkedRadioBtn){
            billItemTypeOne = checkedRadioBtn;
        }
    }

    function setBillItemTypeTwo(checkedRadioBtn){
        if (checkedRadioBtn){
            billItemTypeTwo = checkedRadioBtn;
        }
    }

    function setCallCost(input){
        callCost = input;
    }

    function setSMSCost(input){
        smsCost = input;
    }

    function setWarningLevel(input){
        warningLevel = input;
    }

    function setCriticalLevel(input){
        criticalLevel = input;
    }

    function setTotalBill(){
        totalBillTwo = callsTotalTwo + smsTotalTwo;
    }

    function getCriticalLevel(){
        return criticalLevel;
    }

    function getWarningLevel(){
        return warningLevel;
    }

    function getCallsTotalOne(){
        return callsTotal.toFixed(2);
    }

    function getCallsTotalTwo(){
        return callsTotalTwo.toFixed(2);
    }

    function getCallsTotalThree(){
        return callsTotalThree.toFixed(2);
    }

    function getSMSTotalOne(){
        return smsTotal.toFixed(2);
    }
    
    function getSMSTotalTwo(){
        return smsTotalTwo.toFixed(2);
    }

    function getSMSTotalThree(){
        return smsTotalThree.toFixed(2);

    }

    function getTotalOne(){
        return (callsTotal + smsTotal).toFixed(2);
    }

    function getTotalTwo(){
        return (callsTotalTwo + smsTotalTwo).toFixed(2);
    }

    function getTotalThree(){
        return (callsTotalThree + smsTotalThree).toFixed(2);
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

    function setClass(roundedBillTotal){
        if (roundedBillTotal >= 50) {
            return "danger"
        } else if ((roundedBillTotal >= 30) && (roundedBillTotal < 50)) {
            return "warning"
        } else {
            return ""
        }
    }

    function setClassSettings(){
        if (criticalLevel > 0 || criticalLevel < 0) { 
            if (getTotalThree() >= getCriticalLevel()) {
                return "danger";
            } else if ( getTotalThree() >= warningLevel){        
                return "warning";
                }
                else {
                    return "";
                }
            }
    }

    return{
        calculateBill,
        setCalcString,
        setCalcClass,
        setCallCost,
        setSMSCost,
        setWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        getWarningLevel,
        getCallsTotalOne,
        getCallsTotalTwo,
        getCallsTotalThree,
        getSMSTotalOne,
        getSMSTotalTwo,
        getSMSTotalThree,
        getTotalOne,
        getTotalTwo,
        getTotalThree,
        setTotalsOne,
        setClass,
        setClassSettings,
        calculateRadio,
        calculateSettings,
        setTotalBill,
        setBillItemTypeOne,
        setBillItemTypeTwo
    }
};