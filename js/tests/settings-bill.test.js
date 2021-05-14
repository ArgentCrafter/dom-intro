describe("The settings bill widget:", function (){
    it("Testing calculateSettings, input; callsTotalThree should equal 10", function (){
        let calculateSet = domFunctions();
        calculateSet.setCallCost(10);
        calculateSet.setSMSCost(5);
        calculateSet.setCriticalLevel(15);
        calculateSet.setBillItemTypeTwo("call");
        calculateSet.calculateSettings();
        assert.equal(calculateSet.getCallsTotalThree(), 10);
    });
});