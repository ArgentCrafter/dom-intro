describe("The calculate bill widget:", function(){
    it ("Standard input; Output should be 6.25", function(){
        let calculate = domFunctions();
        calculate.setCalcString("call, call, sms");
        assert.equal(calculate.calculateBill(), 6.25);
    });
    it ("Faulty input at end of string; Output should be 6.25", function(){
        let calculate = domFunctions();
        calculate.setCalcString("call, call, sms, s");
        assert.equal(calculate.calculateBill(), 6.25);
    });
    it ("Faulty input in the middle of string; Output should be 6.25", function(){
        let calculate = domFunctions();
        calculate.setCalcString("call, jeff, call, sms,");
        assert.equal(calculate.calculateBill(), 6.25);
    });
    it ("Input above 20, but below 30; Output should be 'warning'", function(){
        let calculate = domFunctions();
        calculate.setCalcString("call, sms, call, sms, call, call, call, call, call, call");
        assert.equal(calculate.setCalcClass(calculate.calculateBill()), "warning");
    });
    it ("Input above 30; Output should be 'danger'", function(){
        let calculate = domFunctions();
        calculate.setCalcString("call, call, call, call, call, call, call, call, call, call, call, call, call");
        assert.equal(calculate.setCalcClass(calculate.calculateBill()), "danger");
    });
});


// it ("", function(){
//     assert.equal(,);
// });