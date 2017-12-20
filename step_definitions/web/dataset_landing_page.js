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

    Then(/^I can see the 'Goods and Services' dimension/, () => {
        return datasetLandingPage
            .expect.element('@dimensionHeading1').to.be.visible;
    });

    /*
    View the dataset description
    */
    Then(/^I can see the description for the dataset/, () => {
        return datasetLandingPage
            .expect.element('@datasetDescription').text.to.equal('This is the acceptance test description.');
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
    Release frequency is displayed
    */
    Then(/^I can see the release frequency is displayed/, () => {
        return datasetLandingPage
            .expect.element('@releaseFrequency').text.to.equal('Monthly');
    });

    /*
    Release date is formatted correctly
    */
    Then(/^I can see the next release date is formatted/, () => {
        return datasetLandingPage
            .expect.element('@nextReleaseDate').text.to.equal('14 January 2018');
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
    View the metadata description
    */
    When(/^I click the 'Learn more' link/, () => {
        return datasetLandingPage
            .click('@learnMore');
    });

    Then(/^I can see the metadata description for the dimension/, () => {
        return datasetLandingPage
            .waitForElementVisible('@metaDescription', 1000)
            .expect.element('@metaDescription').text.to.equal('This is a description');
    });

    /*
    Dimensions with more than 50 values are shortened to show 10
    */
    Then(/^I can see '([^"]*)' dimension options are visible/, (visible) => {
        return datasetLandingPage
            .numberOfVisibleDimOpts("#id-dimensions .margin-bottom--3:first-of-type ul.dimension-values li", result => {
              return datasetLandingPage.assert.equal(result, visible);
            });
    });

    Then(/^I am shown there are '([^"]*)' more options/, (available) => {
        return datasetLandingPage
            .numberOfAdditionalDimOpts("#id-dimensions .margin-bottom--3:first-of-type .list-size", result => {
              return datasetLandingPage.assert.equal(result, available);
            });
    });

    /*
    Dimensions with 10 - 50 values show 10 and allow me to see the rest if I choose
    */
    Then(/^I can see the 'Geographic Areas' dimension/, () => {
        return datasetLandingPage
            .expect.element('@dimensionHeading2').to.be.visible;
    });

    Then(/^only '([^"]*)' dimension options are visible/, (visible) => {
        return datasetLandingPage
            .numberOfVisibleDimOpts("#id-dimensions .margin-bottom--3:nth-of-type(2) ul.dimension-values > li", result => {
              return datasetLandingPage.assert.equal(result, visible);
            });
    });

    When(/^I click the 'Show all' link/, () => {
        return datasetLandingPage
            .click('@showAllLink');
    });

    Then(/^all '([^"]*)' dimension options are visible/, (visible) => {
        return datasetLandingPage
          .waitForElementVisible('@hiddenList', 2000)
          .numberOfVisibleDimOpts("#id-dimensions .margin-bottom--3:nth-of-type(2) ul.dimension-values li", result => {
            return datasetLandingPage.assert.equal(result, visible);
          });
    });

    /*
    View QMI information
    */
    Then(/^I can see the 'Quality and methodology information' section/, () => {
        return datasetLandingPage
            .expect.element('@qmiHeading').to.be.visible;
    });

    When(/^I click the link to view more QMI information/, () => {
        return datasetLandingPage
            .click('@qmiLink');
    });

    Then(/^I am taken to the QMI page for the dataset/, () => {
        return datasetLandingPage
            .waitForElementVisible('h1', 2000)
            .expect.element('h1 span').text.to.equal('Quality and Methodology Information (QMI):');
    });

    /*
    Latest changes information is displayed
    */
    Then(/^I can see the 'What has changed in this edition' section/, () => {
        return datasetLandingPage
            .expect.element('@changesHeading').to.be.visible;
    });

    When(/^I can see the change title/, () => {
        return datasetLandingPage
            .expect.element('@changesSubHeading').text.to.equal('National Statistics status');
    });

    Then(/^I can see the change description/, () => {
        return datasetLandingPage
            .expect.element('@changesText').text.to.equal('Latest changes description');
    });

    /*
    Download methodology information
    */
    Then(/^I can see the 'Methodologies' section/, () => {
        return datasetLandingPage
            .expect.element('@methodologiesHeading').to.be.visible;
    });

    Then(/^I can see the methodology download/, () => {
        return datasetLandingPage
            .assert.attributeEquals('@methodologiesDownload', 'href', datasetLandingPage.url() + '/download.pdf');
    });

    /*
    View license information
    */
    Then(/^I can see the 'Usage information' section/, () => {
        return datasetLandingPage
            .expect.element('@licenseHeading').to.be.visible;
    });

    Then(/^I can see the license text/, () => {
        return datasetLandingPage
            .expect.element('@licenseText').text.to.equal('Open Government Licence v3.0');
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

    /*
    Contact details are displayed correctly
    */
    Then(/^I can see the contact details for the dataset/, () => {
        return datasetLandingPage
            .expect.element('@contactName').text.to.equal('James Tucker');
        return datasetLandingPage
            .assert.attributeEquals('@contactEmail', 'href', 'mailto:cpi@ons.gsi.gov.uk');
        return datasetLandingPage
            .expect.element('@contactPhone').text.to.equal('+44 (0)1633 456900');
    });

    /*
    View a related publication
    */
    Then(/^I can see the 'Related publications' are available/, () => {
        return datasetLandingPage
            .expect.element('@relatedPublicationTitle').to.be.visible;
    });

    When(/^I click the link to view a related publication/, () => {
        return datasetLandingPage
            .click('@relatedPublicationLink');
    });

    Then(/^I am navigated to the related publication/, () => {
        return datasetLandingPage
            .waitForElementVisible('h1', 2000)
            .expect.element('h1 span').text.to.equal('Statistical bulletin:');
    });

    /*
    View a related dataset
    */
    Then(/^I can see the 'Related datasets' are available/, () => {
        return datasetLandingPage
            .expect.element('@relatedDatasetTitle').to.be.visible;
    });

    When(/^I click the link to view a related dataset/, () => {
        return datasetLandingPage
            .click('@relatedDatasetLink');
    });

    Then(/^I am navigated to the related dataset/, () => {
        return datasetLandingPage
            .waitForElementVisible('h1', 2000)
            .expect.element('h1 span').text.to.equal('Dataset:');
    });

    /*
    Confirm the dataset is a National Statistic
    */
    Then(/^I can see the national statistic information/, () => {
        return datasetLandingPage
            .expect.element('@nationalStatisticTitle').to.be.visible;
    });

    When(/^I click the return to normal service link/, () => {
        return datasetLandingPage
            .click('@mainServiceLink');
    })


});
