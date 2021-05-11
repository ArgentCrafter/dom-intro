const billItemTypeWithSettingsElem = document.querySelector(".billItemTypeWithSettings");
const callCostSettingElem = document.querySelector(".callCostSetting");
const smsCostSettingElem = document.querySelector(".smsCostSetting");
const warningLevelSettingElem = document.querySelector(".warningLevelSetting");
const criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
const btnAdd = document.querySelector(".addBtn");
const btnUpdateSettings = document.querySelector(".updateSettings");
const callTotalSettingsElem = document.querySelector(".callTotalSettings");
const smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
const totalSettingsElem = document.querySelector(".totalSettings");

var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;

var callTotalTwo = 0;
var smsTotalTwo = 0;
var totalBillTwo = 0;

function btnUpdateSettingsClicked() {
    callCost = Number(callCostSettingElem.value);
    smsCost = Number(smsCostSettingElem.value);
    warningLevel = Number(warningLevelSettingElem.value);
    criticalLevel = Number(criticalLevelSettingElem.value);

    if (criticalLevel > 0 || criticalLevel < 0) { 
    if (totalBillTwo >= criticalLevel) {
        totalSettingsElem.classList.add("danger");
        totalSettingsElem.classList.remove("warning");
    } else if (totalBillTwo >= warningLevel){        
        totalSettingsElem.classList.add("warning");
        totalSettingsElem.classList.remove("danger");
        }
        else {
            totalSettingsElem.classList.remove("warning");
        totalSettingsElem.classList.remove("danger");
        }
    }
}
btnUpdateSettings.addEventListener("click", btnUpdateSettingsClicked);

function btnAddClicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
    }

    if (totalBillTwo < criticalLevel){
    if (billItemType === "call") {
        callTotalTwo += callCost;
    } else if (billItemType === "sms") {
        smsTotalTwo += smsCost;
    }
    }
    
    totalBillTwo = callTotalTwo + smsTotalTwo;
    callTotalSettingsElem.innerHTML = callTotalTwo.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotalTwo.toFixed(2);
    totalSettingsElem.innerHTML = totalBillTwo.toFixed(2);

    if (criticalLevel > 0 || criticalLevel < 0) {    
        if (totalBillTwo >= criticalLevel) {
            totalSettingsElem.classList.add("danger");
            totalSettingsElem.classList.remove("warning");
        } else if (totalBillTwo >= warningLevel){        
            totalSettingsElem.classList.add("warning");
            totalSettingsElem.classList.remove("danger");
        }
        else {
            totalSettingsElem.classList.remove("warning");
            totalSettingsElem.classList.remove("danger");
        }
    }
}
btnAdd.addEventListener("click", btnAddClicked);