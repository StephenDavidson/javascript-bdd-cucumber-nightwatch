module.exports = function() {

  this.Given(/^I visit the home page$/, function() {
    this
      .url('https://duckduckgo.com')
      .waitForElementVisible('body', 1000);
  });

  this.Then(/^I should be on the results page$/, function() {
    this.assert.visible('input[name="q"]');
  });

};