module.exports = function() {

  this.When(/^I search for ([^"]*)$/, function (value) {
    var home = this.page.home();
    home
      .setValue('@searchField', 'test')
      .click('@searchButton')
  });

  this.Then(/^the first search result should be visible$/, function() {
    var results = this.page.results();
    results.waitForElementVisible('@firstResultTitle', 1000);
  });
};