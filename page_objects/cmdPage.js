module.exports = {
    url: process.env.ROUTER_URL,
    elements: {
        body: 'body',
        globalSearch: 'input[name="q"]',
        globalSearchSubmit: '#nav-search-submit',
        CMDDatasetLink: 'a[href="/employmentandlabourmarket/peopleinwork/workplacedisputesandworkingconditions/datasets/labourdisputesbysectorlabd02"]',
        pageHeader: '.page-intro__title',
        checkbox: '.checkbox:first-child div .checkbox__input',
        checkboxLabel: '.checkbox:first-child div .checkbox__label',
        filterSelection: '.filter-selection ul li:first-child span',
        filterList: '.filter-selection ul li',
        count: '.filter-selection__header h2 span',
        remove: '.filter-selection ul li:first-child span.remove-link a',
        addAll: 'input.add-all',
        button: '.btn',
        addRange: 'input.add-range'
    },
    commands: [{
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
