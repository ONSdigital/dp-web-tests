var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');
var http = require('http');

var datasetLandingPage = client.page.datasetLandingPage();

defineSupportCode(({Given, Then, When}) => {
    /*
    Reused across scenarios
    */
    Given(/^I go to a dataset landing page/, () => {
        return datasetLandingPage
            .navigate()
            .waitForLoad();
    });

    When(/^I click the 'filter' call-to-action/, () => {
        return datasetLandingPage
            .click('@filterButton')
    });


    /*
    Download a metadata file
    */
    When(/^I click the 'other download options' call-to-action/, () => {
        return datasetLandingPage
            .click('@downloadOptionsButton');
    });

    Then(/^I can see the metadata file download/, () => {
        return datasetLandingPage
            .waitForElementVisible('@metadataFile', 2000)
            .assert.attributeEquals('@metadataFile', 'href', datasetLandingPage.url() + '/metadata.txt');
    });


    /*
    Release date is formatted correctly
    */
    Then(/^I can see the release date is formatted/, () => {
        return datasetLandingPage
            .expect.element('@releaseDate').text.to.equal('14 December 2017');
    });

    /*
    View the dataset's metadata
    */
    let lastLinksHref;
    Then(/^I can see the a table of contents for all metadata/, () => {
        return datasetLandingPage
            .expect.element('@tableOfContentsHeading').to.be.visible;
    });

    When(/^I click a link for a metadata heading/, () => {
        datasetLandingPage.getAttribute('@lastTableOfContentsLink', 'href', linkHref => {
            lastLinksHref = (linkHref.value).substr(linkHref.value.lastIndexOf('#'));
        });
        return datasetLandingPage
            .click('@lastTableOfContentsLink');
    });

    Then(/^I am scrolled to that metadata section/, () => {
        return datasetLandingPage
            .expect.element(lastLinksHref).to.be.visible.before(1000);
    });

    /*
    Dimensions with more than 50 values are shortened to show 10
    */
    Then(/^I can see the 'Goods and Services' dimension/, () => {
        return datasetLandingPage
            .expect.element('@dimensionHeading').to.be.visible;
    });

    Then(/^I can see '([^"]*)' dimension options are visible/, (sum) => {
        return datasetLandingPage
          .numberOfVisibleDimOpts(dimsCount => {
              return datasetLandingPage.assert.equal(dimsCount, sum);
          });
    });

    Then(/^I am shown there are '([^"]*)' more options/, (sum) => {
        return datasetLandingPage
          .numberOfAdditionalDimOpts(dimsNum => {
              return datasetLandingPage.assert.equal(dimsNum, sum);
          });
    });

    /*
    Access previous versions
    */
    Then(/^I can see the 'Previous Versions' are available/, () => {
        return datasetLandingPage
            .expect.element('@prevVersionsHeading').to.be.visible;
    });

    When(/^I click the link to view previous versions/, () => {
        return datasetLandingPage
            .click('@prevVersionsLink');
    });

    Then(/^I am navigated to the '([^"]*)' page/, (title) => {
        return datasetLandingPage
            .waitForElementVisible('h1', 2000)
            .expect.element('h1').text.to.equal(title);
    });

});
