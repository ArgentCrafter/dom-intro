const calculateBtn = document.querySelector('.calculateBtn');
const billTotalElement = document.querySelector('.billTotal');
const billStringElement = document.querySelector('.billString');
const totalElement = document.querySelector('.total');

const calculate = domFunctions();

function calculateBtnClicked() {
  calculate.setCalcString(billStringElement.value);
  billTotalElement.innerHTML = calculate.calculateBill();

  totalElement.classList.remove('danger');
  totalElement.classList.remove('warning');
  totalElement.classList.add(calculate.setCalcClass(calculate.calculateBill()));
}

calculateBtn.addEventListener('click', calculateBtnClicked);
