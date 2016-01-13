module.exports = function() {

  this.When(/^I search for "([^"]*)"$/, function (value) {
    var home = this.page.home();
    home
      .setValue('@searchField', value)
      .click('@searchButton')
  });

  this.Then(/^the first search result should be visible$/, function() {
    var results = this.page.results();
    results.expect.element('@firstResultTitle').to.be.visible.before(1000);;
  });
};
