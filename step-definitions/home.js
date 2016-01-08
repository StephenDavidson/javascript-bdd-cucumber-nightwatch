module.exports = function() {

  this.Given(/^I visit the home page$/, function() {
    var home = this.page.home();
    home.navigate()
      .waitForElementVisible('@body', 1000);
  });
};