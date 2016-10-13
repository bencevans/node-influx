# node-influx Changelog

## Version 5.0.0 (Ongoing)

5.0.0 is a port/rewrite of node-influx to TypeScript, aiming to provide a stronger foundation while fixing many of the pain points and bugs which currently exist. These include issues with escaping data passed to node-influx, date handling difficulties, quirks in the connection, and the lack of complete unit tests. We also take the opportunity to build a more modern, promise-based API.

Please see the documentation linked in the readme for more information. The following is a list of breaking changes:

 * **breaking:** all methods have been modified to return promises
 * **breaking:** result output for grouped results has changed
 * **breaking:** data passed into Influx, except where otherwise noted, will be escaped automatically
 * **breaking:** the point structure for `.write*` methods has changed
 * **breaking:** the `.writePoint` method has been removed
 * **breaking:** `.writeSeries` as been more appropriately renamed `writeMeasurement`
 * **breaking:** `.getSeriesNames` has been renamed `.getSeries`
 * **breaking:** the old `.getSeries` method has been removed in favor of the behaviour exhibited by `getSeriesNames`
 * **breaking:** the InfluxDB client must now be invoked as `new InfluxDB`
 * **breaking:** the connection pool configuration has changed

## 2016-10-06, Version 4.2.3

* bug: globalAgent ignored during HTTPS communication (#207)
* bug: fix methods using deprecated GET which should be using POST (#191 and #188)
* improvement: Support writing RFC3339 timestamps (#203)
* improvement: Added a non-failing error message when the body is empty (#160)
* docs: fix confusing terminology with series versus measurement (#205)
* docs: update links in CONTRIBUTING.md (#199)
* docs: fix "deprecated" typo in docs (#184)

## 2016-09-15, Version 4.2.2

Shoutout to @dandv for lots of awesome PRs this release!

* improvement: sort tags before writing for greater performance (#179)
* improvement: make code compliant with the latest `standard` rules (#161)
* bug: fix escaping of quotes in strings (#183)
* bug: fix empty result from `getDatabaseNames` throwing errors (#168)
* docs: fix messy terminology and typos (#183 and #170)
* docs: include the full license file and copyright (#180)
* docs: fix instructions to run `standard` instead of just `lint` (#181)

## 2016-05-05, Version 4.2.0

* typings: Added TypeScript definitions, thanks to @SPARTAN563 (#129)
* init-url: Added support for configuring the client using a url (#128)
* deps: Updated lodash dependency (#133)
* _createKeyTagString: Fix '=' char escaping in KeyTagString (#127)
* _createKeyValueString/_createKeyTagString: Fix encoding failues on objects containing a 'length' key (#126)
