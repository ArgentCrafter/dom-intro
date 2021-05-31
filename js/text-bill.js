const billTypeTextElement = document.querySelector('.billTypeText');
const addToBillBtn = document.querySelector('.addToBillBtn');
const totalOneElement = document.getElementById('.totalOne');

const calculateText = domFunctions();

var templateSource = document.querySelector(".textTemplate").innerHTML;

var textTemplate = Handlebars.compile(templateSource);

var textDataElem = document.querySelector(".textData");
var textData = {
  callstotal: calculateText.getCallsTotalOne(),
  smstotal: calculateText.getSMSTotalOne(),
  total: calculateText.getTotalOne()
};

var textDataHTML = textTemplate(textData);
textDataElem.innerHTML = textDataHTML;

function addToBillBtnClicked() {
  calculateText.setTotalsOne(billTypeTextElement.value);

  textData = {
    callstotal: calculateText.getCallsTotalOne(),
    smstotal: calculateText.getSMSTotalOne(),
    total: calculateText.getTotalOne(),
    "class" : calculateText.setClass(calculateText.getTotalOne())
  };

  var textDataHTML = textTemplate(textData);
  textDataElem.innerHTML = textDataHTML;
}

addToBillBtn.addEventListener('click', addToBillBtnClicked);
