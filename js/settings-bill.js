// const billItemTypeWithSettingsElem = document.querySelector('.billItemTypeWithSettings');
const callCostSettingElem = document.querySelector('.callCostSetting');
const smsCostSettingElem = document.querySelector('.smsCostSetting');
const warningLevelSettingElem = document.querySelector('.warningLevelSetting');
const criticalLevelSettingElem = document.querySelector('.criticalLevelSetting');
const btnAdd = document.querySelector('.addBtn');
const btnUpdateSettings = document.querySelector('.updateSettings');
const callTotalSettingsElem = document.querySelector('.callTotalSettings');
const smsTotalSettingsElem = document.querySelector('.smsTotalSettings');
const totalSettingsElem = document.querySelector('.totalSettings');

const calculateSet = domFunctions();

function btnUpdateSettingsClicked() {
  calculateSet.setCallCost(callCostSettingElem.value);
  calculateSet.setSMSCost(smsCostSettingElem.value);
  calculateSet.setWarningLevel(warningLevelSettingElem.value);
  calculateSet.setCriticalLevel(criticalLevelSettingElem.value);

  totalSettingsElem.classList.remove('danger');
  totalSettingsElem.classList.remove('warning');
  totalSettingsElem.classList.add(calculateSet.setClassSettings());
}
btnUpdateSettings.addEventListener('click', btnUpdateSettingsClicked);

function btnAddClicked() {
  calculateSet.setTotalBill();

  calculateSet.setBillItemTypeTwo(document.querySelector("input[name='billItemTypeWithSettings']:checked").value);
  calculateSet.calculateSettings();

  callTotalSettingsElem.innerHTML = calculateSet.getCallsTotalThree();
  smsTotalSettingsElem.innerHTML = calculateSet.getSMSTotalThree();
  totalSettingsElem.innerHTML = calculateSet.getTotalThree();

  totalSettingsElem.classList.remove('danger');
  totalSettingsElem.classList.remove('warning');
  totalSettingsElem.classList.add(calculateSet.setClassSettings());
}
btnAdd.addEventListener('click', btnAddClicked);
