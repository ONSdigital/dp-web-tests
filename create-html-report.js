var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
    name: 'Customise My Data Project',
    storeScreenshots: false,

    brandTitle: 'Acceptance Test Report',
    metadata: {
        "Test Environment": "Develop",
        "Browser": "Chrome",
        "Platform": "Mac",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};

reporter.generate(options);
