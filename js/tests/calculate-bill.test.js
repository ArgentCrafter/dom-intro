describe("The calculateBill function:", function(){
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



});


// it ("", function(){
//     assert.equal(calculateBill(),);
// });