module.exports = {
    url: (datasetID, edition, version) => {
        datasetID = datasetID || "931a8a2a-0dc8-42b6-a884-7b6054ed3b68";
        edition = edition || "Time-series";
        version = version || "1";
        return process.env.ROUTER_URL + "/datasets/" + datasetID + "/editions/" + edition + "/versions/" + version;
    },
    elements: {
        datasetDescription: {
            selector: ".dataset-description",
            locateStrategy: 'css selector'
        },
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
        nextReleaseDate: {
            selector: "//dt[contains(@class, 'meta__term') and contains(text(), 'Next release')]/following-sibling::dd",
            locateStrategy: 'xpath'
        },
        releaseFrequency: {
            selector: "//dt[contains(@class, 'meta__term') and contains(text(), 'Release frequency')]/following-sibling::dd",
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
        dimensionHeading1: {
            selector: "//h3[contains(text(), 'Goods and Services')]",
            locateStrategy: 'xpath'
        },
        dimensionHeading2: {
            selector: "//h3[contains(text(), 'Geographic Areas')]",
            locateStrategy: 'xpath'
        },
        qmiHeading: {
          selector: "#id-qmi h2",
            locateStrategy: 'css selector'
        },
        qmiLink: {
          selector: "#id-qmi a",
            locateStrategy: 'css selector'
        },
        methodologiesHeading: {
          selector: "#id-methodology h2",
            locateStrategy: 'css selector'
        },
        methodologiesDownload: {
          selector: "#id-methodology h3 a",
            locateStrategy: 'css selector'
        },
        changesHeading: {
          selector: "#id-changes h2",
            locateStrategy: 'css selector'
        },
        changesSubHeading: {
          selector: "#id-changes h3",
            locateStrategy: 'css selector'
        },
        changesText: {
          selector: "#id-changes p",
            locateStrategy: 'css selector'
        },
        dimensionOptsList: {
            selector: "#id-dimensions .margin-bottom--3:first-of-type ul.dimension-values li",
            locateStrategy: 'css selector'
        },
        additionalDimensionOpts: {
            selector: ".list-size",
            locateStrategy: 'css selector'
        },
        licenseHeading: {
            selector: "#id-license > h2",
            locateStrategy: 'css selector'
        },
        licenseText: {
            selector: "#id-license p",
            locateStrategy: 'css selector'
        },
        prevVersionsHeading: {
            selector: "#id-previous > h2",
            locateStrategy: 'css selector'
        },
        prevVersionsLink: {
            selector: "#id-previous p a",
            locateStrategy: 'css selector'
        },
        showAllLink: {
            selector: ".show-list",
            locateStrategy: "css selector"
        },
        hiddenList: {
            selector: ".dimension-values span",
            locateStrategy: "css selector"
        },
        learnMore: {
            selector: "#id-dimensions .margin-bottom--3:first-of-type details summary",
            locateStrategy: "css selector"
        },
        metaDescription: {
            selector: "#id-dimensions .margin-bottom--3:first-of-type details .panel",
            locateStrategy: "css selector"
        },
        contactName: {
            selector: ".contact-name",
            locateStrategy: "css selector"
        },
        contactEmail: {
            selector: ".contact-email a",
            locateStrategy: "css selector"
        },
        contactPhone: {
            selector: ".contact-phone",
            locateStrategy: "css selector"
        },
        relatedPublicationTitle: {
            selector: ".tiles__item:nth-of-type(2n) h3",
            locateStrategy: "css selector"
        },
        relatedPublicationLink: {
            selector: ".tiles__item:nth-of-type(2n) .tiles__content ul li a",
            locateStrategy: "css selector"
        },
        relatedDatasetTitle: {
            selector: ".tiles__item:nth-of-type(3n) h3",
            locateStrategy: "css selector"
        },
        relatedDatasetLink: {
            selector: ".tiles__item:nth-of-type(3n) .tiles__content ul li a",
            locateStrategy: "css selector"
        },
        nationalStatisticTitle: {
            selector: ".tiles__item:nth-of-type(4n) h3 div",
            locateStrategy: "css selector"
        },
        mainServiceLink: {
            selector: "#main-service-link",
            locateStrategy: "css selector"
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@filterButton', 5000);
        },
        numberOfVisibleDimOpts: function(element, done) {
            return this.api.elements('css selector', element, result => {
              done(result.value.length);
            });
        },
        numberOfAdditionalDimOpts: function(element, done) {
            return this.getText('css selector', element, result => {
              var numRegex = /\d+/g,
                  string = result.value,
                  sum = string.match(numRegex);
              done(sum);
          });
        }
    }]
}
