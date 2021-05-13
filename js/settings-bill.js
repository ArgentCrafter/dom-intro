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

let calculateSet = domFunctions();

function btnUpdateSettingsClicked() {
    calculateSet.setCallCost(callCostSettingElem.value);
    calculateSet.setSMSCost(smsCostSettingElem.value);
    calculateSet.setWarningLevel(warningLevelSettingElem.value);
    calculateSet.setCriticalLevel(criticalLevelSettingElem.value);

    totalSettingsElem.classList.remove("danger");
    totalSettingsElem.classList.remove("warning");
    totalSettingsElem.classList.add(calculateSet.setClassSettings(calculateSet.getTotalTwo()));
}
btnUpdateSettings.addEventListener("click", btnUpdateSettingsClicked);

function btnAddClicked() {

    calculateSet.setTotalBill();

    calculateSet.calculateSettings(document.querySelector("input[name='billItemTypeWithSettings']:checked"));
    
    callTotalSettingsElem.innerHTML = calculateSet.getCallsTotalTwo();
    smsTotalSettingsElem.innerHTML = calculateSet.getSMSTotalTwo();
    totalSettingsElem.innerHTML = calculateSet.getTotalTwo();

    totalSettingsElem.classList.remove("danger");
    totalSettingsElem.classList.remove("warning");
    totalSettingsElem.classList.add(calculateSet.setClassSettings(calculateSet.getTotalTwo()));
}
btnAdd.addEventListener("click", btnAddClicked);