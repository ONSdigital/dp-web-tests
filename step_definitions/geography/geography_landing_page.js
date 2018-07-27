var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');
var http = require('http');

var geographyLandingPage = client.page.geographyLandingPage();

defineSupportCode(({Given, Then, When}) => {
    /*
    Reused across scenarios
    */
    Given(/^I go to a geography landing page/, () => {
        return geographyLandingPage
        
            .navigate()
            .waitForLoad();
    });


    Then(/^I can see the 'Area Types' dimension/, () => {
        return geographyLandingPage
            .expect.element('@areatypes').to.be.visible;
    });


});
