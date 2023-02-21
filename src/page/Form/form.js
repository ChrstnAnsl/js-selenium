/**
 * These are the methods for the Form Page
 *
 * @author Christian Ansel Fernandez
 * 
 * 
 */


 var Locator = require("./formData.js");
 var form = require("./../Base/base.js");

form.prototype.typeEmailInput = function (text) {
    return this.find(Locator.currentAddress).sendKeys(text);
};

module.exports = form