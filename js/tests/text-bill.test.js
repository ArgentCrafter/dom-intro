describe("The text bill widget:", function (){
    it ("Input is 'call'; callsTotal should equal 2.75'", function (){
        let calculateText = domFunctions();
        calculateText.setTotalsOne("call");
        assert.equal(calculateText.getCallsTotalOne(), 2.75);
    });

    it ("Input is 'sms'; smsTotal should equal 0.75", function() {
        let calculateText = domFunctions();
        calculateText.setTotalsOne("sms");
        assert.equal(calculateText.getSMSTotalOne(), 0.75);
    });

    it ("Input is 'call'; smsTotal should equal 0.00", function() {
        let calculateText = domFunctions();
        calculateText.setTotalsOne("call");
        assert.equal(calculateText.getSMSTotalOne(), 0.00);
    });
    it ("Testing colour change, input is 55; Output should be 'danger'", function() {
        let calculateText = domFunctions();
        for (var i=0; i < 20; i++){
        calculateText.setTotalsOne("call")
        }
        assert.equal(calculateText.setClass(calculateText.getTotalOne()), "danger");
    });
    it ("Testing colour change, input is 36; Output should be 'warning'", function() {
        let calculateText = domFunctions();
        for (var i=0; i < 48; i++){
        calculateText.setTotalsOne("sms")
        }
        assert.equal(calculateText.setClass(calculateText.getTotalOne()), "warning");
    });
    it ("Testing colour change, input is 5.5; Output should be an empty string", function() {
        let calculateText = domFunctions();
        for (var i=0; i < 2; i++){
        calculateText.setTotalsOne("call")
        }
        assert.equal(calculateText.setClass(calculateText.getTotalOne()), "");
    });
});