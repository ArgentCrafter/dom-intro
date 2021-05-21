// eslint-disable-next-line no-unused-vars
function domFunctions() {
  let calcString;

  let callsTotal = 0;
  let smsTotal = 0;

  let callsTotalTwo = 0;
  let smsTotalTwo = 0;
  let totalBillTwo = 0;

  let callsTotalThree = 0;
  let smsTotalThree = 0;

  let callCost = 0;
  let smsCost = 0;
  let warningLevel = 0;
  let criticalLevel = 0;

  let billItemTypeOne = '';
  let billItemTypeTwo = '';

  function setCalcString(calcBillString) {
    calcString = calcBillString;
  }

  function setTotalsOne(input) {
    if (input === 'call') {
      callsTotal += 2.75;
    } else if (input === 'sms') {
      smsTotal += 0.75;
    }
  }

  function calculateBill() {
    const billItems = calcString.split(',');
    let billTotal = 0;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < billItems.length; i++) {
      const billItem = billItems[i].trim();

      if (billItem === 'call') {
        billTotal += 2.75;
      } else if (billItem === 'sms') {
        billTotal += 0.75;
      }
    }
    return billTotal.toFixed(2);
  }

  function calculateRadio() {
    if (billItemTypeOne === 'call') {
      callsTotalTwo += 2.75;
    } else if (billItemTypeOne === 'sms') {
      smsTotalTwo += 0.75;
    }
  }

  function calculateSettings() {
    if (totalBillTwo < criticalLevel) {
      if (billItemTypeTwo === 'call') {
        callsTotalThree += callCost;
      } else if (billItemTypeTwo === 'sms') {
        smsTotalThree += smsCost;
      }
    }
  }

  function setBillItemTypeOne(checkedRadioBtn) {
    if (checkedRadioBtn) {
      billItemTypeOne = checkedRadioBtn;
    }
  }

  function setBillItemTypeTwo(checkedRadioBtn) {
    if (checkedRadioBtn) {
      billItemTypeTwo = checkedRadioBtn;
    }
  }

  function setCallCost(input) {
    callCost = input;
  }

  function setSMSCost(input) {
    smsCost = input;
  }

  function setWarningLevel(input) {
    warningLevel = input;
  }

  function setCriticalLevel(input) {
    criticalLevel = input;
  }

  function setTotalBill() {
    totalBillTwo = callsTotalTwo + smsTotalTwo;
  }

  function getCriticalLevel() {
    return criticalLevel;
  }

  function getWarningLevel() {
    return warningLevel;
  }

  function getCallsTotalOne() {
    return callsTotal.toFixed(2);
  }

  function getCallsTotalTwo() {
    return callsTotalTwo.toFixed(2);
  }

  function getCallsTotalThree() {
    return callsTotalThree.toFixed(2);
  }

  function getSMSTotalOne() {
    return smsTotal.toFixed(2);
  }

  function getSMSTotalTwo() {
    return smsTotalTwo.toFixed(2);
  }

  function getSMSTotalThree() {
    return smsTotalThree.toFixed(2);
  }

  function getTotalOne() {
    return (callsTotal + smsTotal).toFixed(2);
  }

  function getTotalTwo() {
    return (callsTotalTwo + smsTotalTwo).toFixed(2);
  }

  function getTotalThree() {
    return (callsTotalThree + smsTotalThree).toFixed(2);
  }

  function setCalcClass(roundedBillTotal) {
    if (roundedBillTotal >= 30) {
      return 'danger';
    } if ((roundedBillTotal >= 20) && (roundedBillTotal < 30)) {
      return 'warning';
    }
    return '';
  }

  function setClass(roundedBillTotal) {
    if (roundedBillTotal >= 50) {
      return 'danger';
    } if ((roundedBillTotal >= 30) && (roundedBillTotal < 50)) {
      return 'warning';
    }
    return '';
  }

  function setClassSettings() {
    if (criticalLevel > 0 || criticalLevel < 0) {
      if (getTotalThree() >= getCriticalLevel()) {
        return 'danger';
      } if (getTotalThree() >= warningLevel) {
        return 'warning';
      }
      return '';
    }
  }

  return {
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
    setBillItemTypeTwo,
  };
}
