/**
 * These are the locators for the Form Page
 *
 * @author Christian Ansel Fernandez
 */

 var webdriver = require("selenium-webdriver"),
 By = webdriver.By;

module.exports = {
    fullName: By.id("userName"),
    userEmail: By.css("userEmail"),
    currentAddress: By.id("currentAddress"),
    permanentAddress: By.id('permanentAddress'),
    submit: By.id('submit')
};