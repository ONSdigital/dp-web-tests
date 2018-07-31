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

    // Then(/^I can see the description for the 'Area Types'/, () => {
        
    //     client.elements('css selector', '.area-type', function(result){
    //         console.log("test 12345678", result.value);
    //         result.value.forEach(element => {
    //             console.log("test", element);
                
                
    //         });
            
    //     });
    //     return geographyLandingPage
        
    // });
    Then(/^I can see the description for the 'Area Type id 0'/, () => {
        return geographyLandingPage
            .expect.element('@areatypes0').text.to.equal('Countries');
    });
    Then(/^I can see the description for the 'Area Type id 1'/, () => {
        return geographyLandingPage
            .expect.element('@areatypes1').text.to.equal('Regions');
    });
    Then(/^I can see the description for the 'Area Type id 2'/, () => {
        return geographyLandingPage
            .expect.element('@areatypes2').text.to.equal('Local Authority Districts');
    });
    
});

// .text.to.equal('Local Authority Districts');