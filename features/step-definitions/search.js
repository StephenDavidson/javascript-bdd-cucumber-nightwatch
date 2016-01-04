module.exports = function() {

  this.When(/^I search for ([^"]*)$/, function (value) {
    this.assert.title(value);
  });

  this.Then(/^the first search result should be visible$/, function() {
    this.assert.visible('input[name="q"]');
  });


};