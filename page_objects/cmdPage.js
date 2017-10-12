function pNavigate(datasetID) {
  return this.api
    .url(process.env.ROUTER_URL + "/datasets/" + datasetID)
    .waitForElementPresent('body', 20000);
}

module.exports = {
    elements: {
        body: 'body',
        pageHeader: '.page-intro__title',
        checkbox: '.checkbox:first-child div .checkbox__input',
        checkboxLabel: 'label[class="checkbox__label"]',
        filterSelection: '.filter-selection ul li:first-child span',
        filterList: '.filter-selection ul li',
        count: '.filter-selection__header h2 span',
        remove: '.filter-selection ul li:first-child span.remove-link a',
        addAll: 'input.add-all',
        button: '.btn',
        addRange: 'input.add-range'
    },
    commands: [{
      navigate: pNavigate,
      verifySelection: function () {
        var self = this
        return self.getText('@checkboxLabel', function(label) {
          self.expect.element('@filterSelection').text.to.equal(label.value);
        });
      },
      verifyAmount: function (client) {
        var self = this
        return client.elements('css selector', '.filter-selection ul li', function (count) {
          self.expect.element('@count').text.to.equal(count.value.length);
        });
      },
    }]
}
