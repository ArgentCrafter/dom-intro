const radioBillAddBtnElem = document.querySelector('.radioBillAddBtn');
const callTotalTwoElem = document.querySelector('.callTotalTwo');
const smsTotalTwoElem = document.querySelector('.smsTotalTwo');
const totalTwoElem = document.querySelector('.totalTwo');
const totalDisplayTwoElement = document.querySelector('.orange');

const calculateRad = domFunctions();

var templateSource = document.querySelector(".template").innerHTML;

var radioTemplate = Handlebars.compile(templateSource);

var radioDataElem = document.querySelector(".radioData");
var radioData = {
  callstotal: calculateRad.getCallsTotalTwo(),
  smstotal: calculateRad.getSMSTotalTwo(),
  total: calculateRad.getTotalTwo()
};

var radioDataHTML = radioTemplate(radioData);
radioDataElem.innerHTML = radioDataHTML;

radioData = {
  callstotal: calculateRad.getCallsTotalTwo(),
  smstotal: calculateRad.getSMSTotalTwo(),
  total: calculateRad.getTotalTwo(),
};

var radioDataHTML = radioTemplate(radioData);
radioDataElem.innerHTML = radioDataHTML;

function RadioBillAddBtnClicked() {
  calculateRad.setBillItemTypeOne(document.querySelector("input[name='billItemType']:checked").value);
  calculateRad.calculateRadio();

  radioData = {
    callstotal: calculateRad.getCallsTotalTwo(),
    smstotal: calculateRad.getSMSTotalTwo(),
    total: calculateRad.getTotalTwo(),
    class: calculateRad.setClass(calculateRad.getTotalTwo())
  };

  var radioDataHTML = textTemplate(radioData);
  radioDataElem.innerHTML = radioDataHTML;
}

radioBillAddBtnElem.addEventListener('click', RadioBillAddBtnClicked);
