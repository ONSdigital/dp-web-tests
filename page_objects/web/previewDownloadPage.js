module.exports = {
    url: (filterOutputID) => {
        filterOutputID = filterOutputID || "246429e9-ca50-469b-a418-be258c36a66a";
        return process.env.ROUTER_URL + "/filter-outputs/" + filterOutputID;
    },
    elements: {
        heading: {
            selector: "h1 strong",
            locateStrategy: 'css selector'
        },
        excelDownload: {
            selector: "#excel-download",
            locateStrategy: 'css selector',
        },
        csvDownload: {
            selector: "#csv-download",
            locateStrategy: 'css selector',
        },
        txtDownload: {
            selector: "#txt-download",
            locateStrategy: 'css selector',
        },
        previewRow: {
            selector: ".table-preview tr",
            locateStrategy: 'css selector',
        },
        adjustFilterOptions: {
            selector: "#adjust-filter-options",
            locateStrategy: 'css selector',
        },
        datasetPageLink: {
            selector: "#dataset-page-link",
            locateStrategy: 'css selector',
        },
        otherDownloadOptions: {
            selector: "button.js-show-hide__button",
            locateStrategy: 'css selector',
        }
    },
    commands: [{
        waitForLoad: function() {
            return this.expect.element('@heading').text.to.equal('Filtered dataset');;
        },
        numberOfTableRows: function(done) {
            return this.api.elements(this.elements.previewRow.locateStrategy, this.elements.previewRow.selector, result => {
                done(result.value.length);
            })
        }
    }]
}
