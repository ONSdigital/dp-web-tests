Performance Tests for web
=========================

To run the performance tests install loadimpact/k6

On Mac:

`brew tap loadimpact/k6`
`brew install k6`

To run the tests set the hostname environment variable you want to run against:

`export HOST_NAME=<Your host name>`

and then `k6 run createfilter.js` or `ks run landingpage.js`
