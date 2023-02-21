/**
 * This is the Base page that will be extended to constructing Page Object Pages.
 * It will make them more business level friendly.
 *
 * @author Christian Ansel Fernandez
 */

// require("chromedriver");

var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until,
  chrome = require("selenium-webdriver/chrome"),
  path = require("chromedriver").path,
  o = new chrome.Options();

// Uncomment if needed
// o.addArguments("disable-infobars");
// o.addArguments("headless");

var BasePage = function () {
    this.driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .setChromeOptions(o)
      .build();
    var driver = this.driver;
  
    this.goToUrl = async function (url) {
      return await driver.get(url);
    };
  
    this.quit = function () {
      return driver.quit();
    };
  
    this.find = function (element) {
      driver.wait(until.elementLocated(element), 5000);
      return driver.findElement(element);
    };
  
    this.findAll = function (element) {
      driver.wait(until.elementLocated(element), 5000);
      return driver.findElements(element);
    };

    this.getUrl = async function () {
        return await driver.getCurrentUrl();
    }
    
};
  
module.exports = BasePage;