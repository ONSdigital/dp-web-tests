const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')
const geckodriver = require('geckodriver')

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'features/step_definitions',
    '--require', 'features/support/hooks.js',
    '--format', 'json:reports/cucumber.json',
    'features'
  ]
})

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  page_objects_path: 'page_objects',
  live_output: false,
  disable_colors: false,
  request_timeout_options: 20000,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'phantomjs.binary.path': phantomjs.path
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },
    firefox: {
      desiredCapabilities: {
          browserName: 'firefox',
          javascriptEnabled: true,
          acceptSslCerts: true,
          marionette: true
      },
      selenium: {
          cli_args: {
              'webdriver.gecko.driver': geckodriver.path
          }
      }
    },
    safari: {
      screenshots: {
          enabled: false,
          on_failure: true,
          on_error: false,
          path: "reports/screenshots"
      },
      desiredCapabilities: {
          browserName: 'safari',
          javascriptEnabled: true,
          acceptSslCerts: true
      }
    }
  }
}