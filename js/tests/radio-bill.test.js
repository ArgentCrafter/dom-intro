describe("The radio bill widget:", function (){
    it("Input is 'call'; callsTotalTwo should equal 2.75", function(){
        let calculateRad = domFunctions();
        calculateRad.setBillItemTypeOne("call")
        calculateRad.calculateRadio();
        assert.equal(calculateRad.getCallsTotalTwo(), 2.75);
    });
    it("Input is 'sms'; SMSTotalTwo should equal 0.75", function(){
        let calculateRad = domFunctions();
        calculateRad.setBillItemTypeOne("sms")
        calculateRad.calculateRadio();
        assert.equal(calculateRad.getSMSTotalTwo(), 0.75);
    });
    it("Input is 'call'; SMSTotalTwo should equal 0.00", function(){
        let calculateRad = domFunctions();
        calculateRad.setBillItemTypeOne("call")
        calculateRad.calculateRadio();
        assert.equal(calculateRad.getSMSTotalTwo(), 0.00);
    });
    it("Input is 2 entries of 'call' and an 'sms' entry; Output should equal 6.25", function(){
        let calculateRad = domFunctions();
        calculateRad.setBillItemTypeOne("call");
        calculateRad.calculateRadio();
        calculateRad.calculateRadio();
        calculateRad.setBillItemTypeOne("sms");
        calculateRad.calculateRadio();
        assert.equal(calculateRad.getTotalTwo(), 6.25);
    });
    it("Testing colour change, input is 55; Output should be 'danger'", function(){
        let calculateRad = domFunctions();
        for (var i=0; i < 20; i++){
            calculateRad.setBillItemTypeOne("call");
            calculateRad.calculateRadio();
            }
            assert.equal(calculateRad.setClass(calculateRad.getTotalTwo()), "danger");
    });
    it("Testing colour change, input is 36; Output should be 'warning'", function(){
        let calculateRad = domFunctions();
        for (var i=0; i < 48; i++){
            calculateRad.setBillItemTypeOne("sms");
            calculateRad.calculateRadio();
        }

            assert.equal(calculateRad.setClass(calculateRad.getTotalTwo()), "warning");
    });
    it("Testing colour change, input is 5.5; Output should be an empty string", function(){
        let calculateRad = domFunctions();
        for (var i=0; i < 2; i++){
            calculateRad.setBillItemTypeOne("call");
            calculateRad.calculateRadio();
        }

            assert.equal(calculateRad.setClass(calculateRad.getTotalTwo()), "");
    });
});