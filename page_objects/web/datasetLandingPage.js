module.exports = {
    url: (datasetID, edition, version) => {
        datasetID = datasetID || "931a8a2a-0dc8-42b6-a884-7b6054ed3b68";
        edition = edition || "Time-series";
        version = version || "1";
        return process.env.ROUTER_URL + "/datasets/" + datasetID + "/editions/" + edition + "/versions/" + version;
    },
    elements: {
        filterButton: {
            selector: "//*[contains(@class, 'btn') and contains(@value, 'Filter and download')]",
            locateStrategy: 'xpath'
        },
        downloadOptionsButton: {
            selector: "//button[contains(@class, 'js-show-hide__button')]/descendant-or-self::*[contains(text(), 'Other download options')]",
            locateStrategy: 'xpath'
        },
        metadataFile: {
            selector: "//*[contains(@class, 'js-show-hide__content') and contains(@aria-hidden, false)]/descendant::a[contains(text(), 'Text')]",
            locateStrategy: 'xpath'
        },
        releaseDate: {
            selector: "//dt[contains(@class, 'meta__term') and contains(text(), 'Release date')]/following-sibling::dd",
            locateStrategy: 'xpath'
        },
        tableOfContentsHeading: {
            selector: ".table-of-contents__title",
            locateStrategy: 'css selector'
        },
        lastTableOfContentsLink: {
            selector: ".table-of-contents__item:last-of-type a",
            locateStrategy: 'css selector'
        },
        dimensionHeading: {
            selector: "//h3[contains(text(), 'Goods and Services')]",
            locateStrategy: 'xpath'
        },
        dimensionOptsList: {
            selector: "#id-dimensions .margin-bottom--3:first-of-type ul.dimension-values li",
            locateStrategy: 'css selector'
        },
        additionalDimensionOpts: {
            selector: ".list-size",
            locateStrategy: 'css selector'
        },
        prevVersionsHeading: {
            selector: "#id-previous > h2",
            locateStrategy: 'css selector'
        },
        prevVersionsLink: {
            selector: "#id-previous p a",
            locateStrategy: 'css selector'
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@filterButton', 5000);
        },
        numberOfVisibleDimOpts: function(done) {
            return this.api.elements(this.elements.dimensionOptsList.locateStrategy, this.elements.dimensionOptsList.selector, result => {
                done(result.value.length);
            });
        },
        numberOfAdditionalDimOpts: function(done) {
            return this.getText(this.elements.additionalDimensionOpts.locateStrategy, this.elements.additionalDimensionOpts.selector, element => {
              var numRegex = /\d+/g,
                  string = element.value,
                  getNum = string.match(numRegex);
              done(getNum);
          });
        }
    }]
}
