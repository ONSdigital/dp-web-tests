var reporter = require('cucumber-html-reporter')

var options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
    name: 'Customise My Data Project',
    brandTitle: 'Acceptance Test Report',
    metadata: {
        "Test Environment": "Develop",
        "Browser": "Chrome",
        "Platform": "Mac",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
}

reporter.generate(options)