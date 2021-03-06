# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.4.2"></a>
## [1.4.2](https://github.com/meumobi/ams-hb/compare/v1.4.1...v1.4.2) (2018-08-15)


### Bug Fixes

* Closes [#29](https://github.com/meumobi/ams-hb/issues/29), add sizeConfig parameter to the pbjs.setConfig ([5a037a1](https://github.com/meumobi/ams-hb/commit/5a037a1))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/meumobi/ams-hb/compare/v1.4.0...v1.4.1) (2018-08-10)


### Bug Fixes

* Closes [#28](https://github.com/meumobi/ams-hb/issues/28), Calls to adserver are not made when no bidders responded ([bc32f37](https://github.com/meumobi/ams-hb/commit/bc32f37))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/meumobi/ams-hb/compare/v1.3.1...v1.4.0) (2018-07-03)


### Bug Fixes

* add basedir on browsersync config access by default on www as public dir ([313d575](https://github.com/meumobi/ams-hb/commit/313d575))
* add ga module on prebid.js ([2b93d49](https://github.com/meumobi/ams-hb/commit/2b93d49))
* allow to track analytics among another trackers ids ([9b08da0](https://github.com/meumobi/ams-hb/commit/9b08da0))
* move global name from pbjs to pbams ([a933137](https://github.com/meumobi/ams-hb/commit/a933137))
* remove ga error tracking ([1b78051](https://github.com/meumobi/ams-hb/commit/1b78051))


### Features

* new ams lib release ([46351dc](https://github.com/meumobi/ams-hb/commit/46351dc))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/meumobi/ams-hb/compare/v1.1.0...v1.3.1) (2018-06-19)



<a name="1.1.0"></a>
# [1.1.0](https://github.com/meumobi/ams-hb/compare/v1.0.0...v1.1.0) (2018-06-19)


### Features

* add cmp demo ([4bd0003](https://github.com/meumobi/ams-hb/commit/4bd0003))
* add gdpr param on settings and add new mango adunits ([4bb8aea](https://github.com/meumobi/ams-hb/commit/4bb8aea))
* add prebid v1.13 and v1.14 ([53837e1](https://github.com/meumobi/ams-hb/commit/53837e1))
* new hb-ams-lib releases ([eb072e8](https://github.com/meumobi/ams-hb/commit/eb072e8))
* update DAC from 3.1.0 to 3.1.1 ([7078352](https://github.com/meumobi/ams-hb/commit/7078352))


### Performance Improvements

* migrate prebid.js to a cdn ([a58e28f](https://github.com/meumobi/ams-hb/commit/a58e28f))



<a name="1.0.0"></a>
# 1.0.0 (2018-06-04)


### Bug Fixes

* Closes [#26](https://github.com/meumobi/ams-hb/issues/26), DOMContentLoaded is requesting bids already requested by prebid ([56a8749](https://github.com/meumobi/ams-hb/commit/56a8749))


### Features

* Prebid.js upgraded to v1.11 BREAKING CHANGES ([7466496](https://github.com/meumobi/ams-hb/commit/7466496))
* Upgrade DAC.js to 3.1.0 - who supports GDPR ([570a8eb](https://github.com/meumobi/ams-hb/commit/570a8eb))


### BREAKING CHANGES

* update all adUnits id from integer to string, 1234 to "1234"
