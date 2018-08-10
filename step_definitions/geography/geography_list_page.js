var {client} = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');
var http = require('http');

var geographyListPage = client.page.geographyListPage();

defineSupportCode(({Given, Then, When}) => {
    /*
    Reused across scenarios
    */
    Given(/^I go to a geography list page/, () => {
        return geographyListPage
        
            .navigate()
            .waitForLoad();
    });


    Then(/^I can see the geography list 'Area Types' dimension/, () => {
        return geographyListPage
            .expect.element('@areatypes').to.be.visible;
    });

    Then(/^I can go to the Statistics page/, () => {
        client.elements('css selector', '.area-type',function (result) {
            var ids = result.value;
            if (ids.length > 10) {
                idsLength = 10;
            }else{
                idsLength = ids.length;
            }
            for (var i = 0; i < idsLength; i++) {
                client.click("#area-type-" + i);
                client.back();
                client.waitForElementVisible('.area-type', 500);
                client.expect.element('.area-type').to.be.present;
            }
            
        });
        return geographyListPage
    });
});