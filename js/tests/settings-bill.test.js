describe("The settings bill widget:", function (){
    it("Testing calculateSettings, input: callCost = 10; callsTotalThree should equal 10", function (){
        let calculateSet = domFunctions();
        calculateSet.setCallCost(10);
        calculateSet.setSMSCost(5);
        calculateSet.setCriticalLevel(15);
        calculateSet.setBillItemTypeTwo("call");
        calculateSet.calculateSettings();
        assert.equal(calculateSet.getCallsTotalThree(), 10);
    });
    it("Testing calculateSettings, input: smsCost = 5; SMSTotalThree should equal 5", function(){
        let calculateSet = domFunctions();
        calculateSet.setCallCost(10);
        calculateSet.setSMSCost(5);
        calculateSet.setCriticalLevel(15);
        calculateSet.setBillItemTypeTwo("sms");
        calculateSet.calculateSettings();
        assert.equal(calculateSet.getSMSTotalThree(), 5);
    });
    it("Testing calculateSettings, input: callCost = 10; SMSTotalThree should equal 0.00", function (){
        let calculateSet = domFunctions();
        calculateSet.setCallCost(10);
        calculateSet.setSMSCost(5);
        calculateSet.setCriticalLevel(30);
        calculateSet.setBillItemTypeTwo("call");
        calculateSet.calculateSettings();
        assert.equal(calculateSet.getSMSTotalThree(), 0.00);
    });
    it("Testing calculateSettings, input: callCost = 10, smsCost = 5, 2 calls and 1 sms; Output should equal 25", function (){
        let calculateSet = domFunctions();
        calculateSet.setCallCost(10);
        calculateSet.setSMSCost(5);
        calculateSet.setCriticalLevel(30);
        calculateSet.setBillItemTypeTwo("call");
        calculateSet.calculateSettings();
        calculateSet.calculateSettings();
        calculateSet.setBillItemTypeTwo("sms");
        calculateSet.calculateSettings();
        assert.equal(calculateSet.getTotalThree(), 25);
    });
    it("Testing colour change, input: totalThree = 35, warningLevel = 15, criticalLevel = 30; output should be 'danger'", function(){
        let calculateSet = domFunctions();
        calculateSet.setCallCost(35);
        calculateSet.setSMSCost(5);
        calculateSet.setWarningLevel(15);
        calculateSet.setCriticalLevel(30);
        calculateSet.setBillItemTypeTwo("call");
        calculateSet.calculateSettings();
        assert.equal(calculateSet.setClassSettings(), "danger")
    });
    it("Testing colour change, input: totalThree = 15, warningLevel = 15, criticalLevel = 30; output should be 'warning'", function(){
        let calculateSet = domFunctions();
        calculateSet.setCallCost(5);
        calculateSet.setSMSCost(15);
        calculateSet.setWarningLevel(15);
        calculateSet.setCriticalLevel(30);
        calculateSet.setBillItemTypeTwo("sms");
        calculateSet.calculateSettings();
        assert.equal(calculateSet.setClassSettings(), "warning")
    });
    it("Testing colour change, input: totalThree = 10, warningLevel = 15, criticalLevel = 30; output should be an empty string", function(){
        let calculateSet = domFunctions();
        calculateSet.setCallCost(10);
        calculateSet.setSMSCost(5);
        calculateSet.setWarningLevel(15);
        calculateSet.setCriticalLevel(30);
        calculateSet.setBillItemTypeTwo("call");
        calculateSet.calculateSettings();
        assert.equal(calculateSet.setClassSettings(), "")
    });
});