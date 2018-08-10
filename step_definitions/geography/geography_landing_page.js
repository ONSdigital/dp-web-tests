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

    Then(/^I can go to the 'Area Types' geography list page/, () => {
        client.elements('css selector', '.area-type',function (result) {
            var ids = result.value;
            for (var i = 0; i < ids.length; i++) {
                client.click("#area-type-" + i);
                client.waitForElementVisible('.area-type-list', 500);
                client.expect.element('.area-type').to.be.present;
                client.back();
            }
            
        });
        return geographyLandingPage
    });
});