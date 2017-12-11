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
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.waitForElementVisible('@filterButton', 5000);
        }
    }]
}
