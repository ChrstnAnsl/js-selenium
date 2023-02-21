// require("chromedriver");

// const { Builder, By, Key } = require("selenium-webdriver");
// var assert = require("chai").assert;



// const {Builder, By, until} = require('selenium-webdriver');

// (async function example() {
//     const driver = await new Builder().forBrowser('chrome').build();

//     try {
//         await driver.get('https://www.google.com');
//         await driver.findElement(By.name('q')).sendKeys('nehalist');
//         await driver.findElement(By.id('tsf')).submit();
//         await driver.wait(until.elementLocated(By.id('search')));
//         await driver.findElement(By.linkText('nehalist.io')).click();
//         await driver.wait(until.titleIs('nehalist.io'));
//     } finally {
//         await driver.quit();
//     }
// })();

// require("chromedriver");

var assert = require("chai").assert;
var FormTest = require("./page/Form/form.js");
var test;

describe("Inner Suite 1", function(){
    before(function () {
        // Set and initialize DB and other data
    });
 
    after(function () {
        // Remove data
 
    });
    
    beforeEach(async function () {
        test = new FormTest();
        await test.goToUrl("https://demoqa.com/");
    
    });
 
    afterEach(function () {
        test.quit();
    });
  
    it('Test-1', async function () {
        await test.goToUrl("https://demoqa.com/text-box");
        test.typeEmailInput("TEST")    
        const url = await test.getUrl();
        assert.equal(url, "https://demoqa.com/text-box");
    
    });
 
    it("Test-2", function () {
        // test Code
        // assertions
    });
 
    it("Test-3", function() {
        // test Code
        // assertions
    });
  
});
