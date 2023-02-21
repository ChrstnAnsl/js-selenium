var assert = require("chai").assert;
var FormTest = require("./page/Form/form.js");
var test;

describe("Test Form Page", function(){
    before(function () {
        // Set and initialize DB and other data
    });
 
    after(function () {
        // Remove data
 
    });
    
    beforeEach(async function () {
        // test = new FormTest();
        // await test.goToUrl("https://demoqa.com/");
    });
 
    afterEach(function () {
        // test.quit();
    });
  
    it('Test-1', async function () {
        test = new FormTest();
        await test.goToUrl("https://demoqa.com/text-box");
        test.typeEmailInput("TEST")    
        const url = await test.getUrl();
        assert.equal(url, "https://demoqa.com/text-box");
        assert.equal("TEST", "TEST");
    });
 
    it("Test-2", function () {
        // test Code
        // assertions
        assert.equal("TEST", "TEST");
    });
 
    it("Test-3", function() {
        // test Code
        // assertions
        assert.equal("TEST", "TEST");
    });
  
});
