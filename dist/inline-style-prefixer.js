(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.InlineStylePrefixer = factory());
}(this, function () { 'use strict';

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers;


  var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
  function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }

  var bowser = __commonjs(function (module, exports, global) {
  /*!
   * Bowser - a browser detector
   * https://github.com/ded/bowser
   * MIT License | (c) Dustin Diaz 2015
   */

  !function (root, name, definition) {
    if (typeof module != 'undefined' && module.exports) module.exports = definition();else if (typeof define == 'function' && define.amd) define(name, definition);else root[name] = definition();
  }(__commonjs_global, 'bowser', function () {
    /**
      * See useragents.js for examples of navigator.userAgent
      */

    var t = true;

    function detect(ua) {

      function getFirstMatch(regex) {
        var match = ua.match(regex);
        return match && match.length > 1 && match[1] || '';
      }

      function getSecondMatch(regex) {
        var match = ua.match(regex);
        return match && match.length > 1 && match[2] || '';
      }

      var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),
          likeAndroid = /like android/i.test(ua),
          android = !likeAndroid && /android/i.test(ua),
          nexusMobile = /nexus\s*[0-6]\s*/i.test(ua),
          nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua),
          chromeos = /CrOS/.test(ua),
          silk = /silk/i.test(ua),
          sailfish = /sailfish/i.test(ua),
          tizen = /tizen/i.test(ua),
          webos = /(web|hpw)os/i.test(ua),
          windowsphone = /windows phone/i.test(ua),
          samsungBrowser = /SamsungBrowser/i.test(ua),
          windows = !windowsphone && /windows/i.test(ua),
          mac = !iosdevice && !silk && /macintosh/i.test(ua),
          linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua),
          edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
          versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i),
          tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua),
          mobile = !tablet && /[^-]mobi/i.test(ua),
          xbox = /xbox/i.test(ua),
          result;

      if (/opera/i.test(ua)) {
        //  an old Opera
        result = {
          name: 'Opera',
          opera: t,
          version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
        };
      } else if (/opr\/|opios/i.test(ua)) {
        // a new Opera
        result = {
          name: 'Opera',
          opera: t,
          version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
        };
      } else if (/SamsungBrowser/i.test(ua)) {
        result = {
          name: 'Samsung Internet for Android',
          samsungBrowser: t,
          version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
        };
      } else if (/coast/i.test(ua)) {
        result = {
          name: 'Opera Coast',
          coast: t,
          version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
        };
      } else if (/yabrowser/i.test(ua)) {
        result = {
          name: 'Yandex Browser',
          yandexbrowser: t,
          version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
        };
      } else if (/ucbrowser/i.test(ua)) {
        result = {
          name: 'UC Browser',
          ucbrowser: t,
          version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (/mxios/i.test(ua)) {
        result = {
          name: 'Maxthon',
          maxthon: t,
          version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (/epiphany/i.test(ua)) {
        result = {
          name: 'Epiphany',
          epiphany: t,
          version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (/puffin/i.test(ua)) {
        result = {
          name: 'Puffin',
          puffin: t,
          version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
        };
      } else if (/sleipnir/i.test(ua)) {
        result = {
          name: 'Sleipnir',
          sleipnir: t,
          version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (/k-meleon/i.test(ua)) {
        result = {
          name: 'K-Meleon',
          kMeleon: t,
          version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (windowsphone) {
        result = {
          name: 'Windows Phone',
          osname: 'Windows Phone',
          windowsphone: t
        };
        if (edgeVersion) {
          result.msedge = t;
          result.version = edgeVersion;
        } else {
          result.msie = t;
          result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);
        }
      } else if (/msie|trident/i.test(ua)) {
        result = {
          name: 'Internet Explorer',
          msie: t,
          version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
        };
      } else if (chromeos) {
        result = {
          name: 'Chrome',
          osname: 'Chrome OS',
          chromeos: t,
          chromeBook: t,
          chrome: t,
          version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        };
      } else if (/edg([ea]|ios)/i.test(ua)) {
        result = {
          name: 'Microsoft Edge',
          msedge: t,
          version: edgeVersion
        };
      } else if (/vivaldi/i.test(ua)) {
        result = {
          name: 'Vivaldi',
          vivaldi: t,
          version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
        };
      } else if (sailfish) {
        result = {
          name: 'Sailfish',
          osname: 'Sailfish OS',
          sailfish: t,
          version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
        };
      } else if (/seamonkey\//i.test(ua)) {
        result = {
          name: 'SeaMonkey',
          seamonkey: t,
          version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
        };
      } else if (/firefox|iceweasel|fxios/i.test(ua)) {
        result = {
          name: 'Firefox',
          firefox: t,
          version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
        };
        if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
          result.firefoxos = t;
          result.osname = 'Firefox OS';
        }
      } else if (silk) {
        result = {
          name: 'Amazon Silk',
          silk: t,
          version: getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
        };
      } else if (/phantom/i.test(ua)) {
        result = {
          name: 'PhantomJS',
          phantom: t,
          version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
        };
      } else if (/slimerjs/i.test(ua)) {
        result = {
          name: 'SlimerJS',
          slimer: t,
          version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
        };
      } else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
        result = {
          name: 'BlackBerry',
          osname: 'BlackBerry OS',
          blackberry: t,
          version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
        };
      } else if (webos) {
        result = {
          name: 'WebOS',
          osname: 'WebOS',
          webos: t,
          version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
        };
        /touchpad\//i.test(ua) && (result.touchpad = t);
      } else if (/bada/i.test(ua)) {
        result = {
          name: 'Bada',
          osname: 'Bada',
          bada: t,
          version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
        };
      } else if (tizen) {
        result = {
          name: 'Tizen',
          osname: 'Tizen',
          tizen: t,
          version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
        };
      } else if (/qupzilla/i.test(ua)) {
        result = {
          name: 'QupZilla',
          qupzilla: t,
          version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
        };
      } else if (/chromium/i.test(ua)) {
        result = {
          name: 'Chromium',
          chromium: t,
          version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
        };
      } else if (/chrome|crios|crmo/i.test(ua)) {
        result = {
          name: 'Chrome',
          chrome: t,
          version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        };
      } else if (android) {
        result = {
          name: 'Android',
          version: versionIdentifier
        };
      } else if (/safari|applewebkit/i.test(ua)) {
        result = {
          name: 'Safari',
          safari: t
        };
        if (versionIdentifier) {
          result.version = versionIdentifier;
        }
      } else if (iosdevice) {
        result = {
          name: iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
          // WTF: version is not part of user agent in web apps
        };if (versionIdentifier) {
          result.version = versionIdentifier;
        }
      } else if (/googlebot/i.test(ua)) {
        result = {
          name: 'Googlebot',
          googlebot: t,
          version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
        };
      } else {
        result = {
          name: getFirstMatch(/^(.*)\/(.*) /),
          version: getSecondMatch(/^(.*)\/(.*) /)
        };
      }

      // set webkit or gecko flag for browsers based on these engines
      if (!result.msedge && /(apple)?webkit/i.test(ua)) {
        if (/(apple)?webkit\/537\.36/i.test(ua)) {
          result.name = result.name || "Blink";
          result.blink = t;
        } else {
          result.name = result.name || "Webkit";
          result.webkit = t;
        }
        if (!result.version && versionIdentifier) {
          result.version = versionIdentifier;
        }
      } else if (!result.opera && /gecko\//i.test(ua)) {
        result.name = result.name || "Gecko";
        result.gecko = t;
        result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);
      }

      // set OS flags for platforms that have multiple browsers
      if (!result.windowsphone && (android || result.silk)) {
        result.android = t;
        result.osname = 'Android';
      } else if (!result.windowsphone && iosdevice) {
        result[iosdevice] = t;
        result.ios = t;
        result.osname = 'iOS';
      } else if (mac) {
        result.mac = t;
        result.osname = 'macOS';
      } else if (xbox) {
        result.xbox = t;
        result.osname = 'Xbox';
      } else if (windows) {
        result.windows = t;
        result.osname = 'Windows';
      } else if (linux) {
        result.linux = t;
        result.osname = 'Linux';
      }

      function getWindowsVersion(s) {
        switch (s) {
          case 'NT':
            return 'NT';
          case 'XP':
            return 'XP';
          case 'NT 5.0':
            return '2000';
          case 'NT 5.1':
            return 'XP';
          case 'NT 5.2':
            return '2003';
          case 'NT 6.0':
            return 'Vista';
          case 'NT 6.1':
            return '7';
          case 'NT 6.2':
            return '8';
          case 'NT 6.3':
            return '8.1';
          case 'NT 10.0':
            return '10';
          default:
            return undefined;
        }
      }

      // OS version extraction
      var osVersion = '';
      if (result.windows) {
        osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i));
      } else if (result.windowsphone) {
        osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
      } else if (result.mac) {
        osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
        osVersion = osVersion.replace(/[_\s]/g, '.');
      } else if (iosdevice) {
        osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
        osVersion = osVersion.replace(/[_\s]/g, '.');
      } else if (android) {
        osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
      } else if (result.webos) {
        osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
      } else if (result.blackberry) {
        osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
      } else if (result.bada) {
        osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
      } else if (result.tizen) {
        osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
      }
      if (osVersion) {
        result.osversion = osVersion;
      }

      // device type extraction
      var osMajorVersion = !result.windows && osVersion.split('.')[0];
      if (tablet || nexusTablet || iosdevice == 'ipad' || android && (osMajorVersion == 3 || osMajorVersion >= 4 && !mobile) || result.silk) {
        result.tablet = t;
      } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || nexusMobile || result.blackberry || result.webos || result.bada) {
        result.mobile = t;
      }

      // Graded Browser Support
      // http://developer.yahoo.com/yui/articles/gbs
      if (result.msedge || result.msie && result.version >= 10 || result.yandexbrowser && result.version >= 15 || result.vivaldi && result.version >= 1.0 || result.chrome && result.version >= 20 || result.samsungBrowser && result.version >= 4 || result.firefox && result.version >= 20.0 || result.safari && result.version >= 6 || result.opera && result.version >= 10.0 || result.ios && result.osversion && result.osversion.split(".")[0] >= 6 || result.blackberry && result.version >= 10.1 || result.chromium && result.version >= 20) {
        result.a = t;
      } else if (result.msie && result.version < 10 || result.chrome && result.version < 20 || result.firefox && result.version < 20.0 || result.safari && result.version < 6 || result.opera && result.version < 10.0 || result.ios && result.osversion && result.osversion.split(".")[0] < 6 || result.chromium && result.version < 20) {
        result.c = t;
      } else result.x = t;

      return result;
    }

    var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '');

    bowser.test = function (browserList) {
      for (var i = 0; i < browserList.length; ++i) {
        var browserItem = browserList[i];
        if (typeof browserItem === 'string') {
          if (browserItem in bowser) {
            return true;
          }
        }
      }
      return false;
    };

    /**
     * Get version precisions count
     *
     * @example
     *   getVersionPrecision("1.10.3") // 3
     *
     * @param  {string} version
     * @return {number}
     */
    function getVersionPrecision(version) {
      return version.split(".").length;
    }

    /**
     * Array::map polyfill
     *
     * @param  {Array} arr
     * @param  {Function} iterator
     * @return {Array}
     */
    function map(arr, iterator) {
      var result = [],
          i;
      if (Array.prototype.map) {
        return Array.prototype.map.call(arr, iterator);
      }
      for (i = 0; i < arr.length; i++) {
        result.push(iterator(arr[i]));
      }
      return result;
    }

    /**
     * Calculate browser version weight
     *
     * @example
     *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
     *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
     *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
     *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
     *
     * @param  {Array<String>} versions versions to compare
     * @return {Number} comparison result
     */
    function compareVersions(versions) {
      // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
      var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
      var chunks = map(versions, function (version) {
        var delta = precision - getVersionPrecision(version);

        // 2) "9" -> "9.0" (for precision = 2)
        version = version + new Array(delta + 1).join(".0");

        // 3) "9.0" -> ["000000000"", "000000009"]
        return map(version.split("."), function (chunk) {
          return new Array(20 - chunk.length).join("0") + chunk;
        }).reverse();
      });

      // iterate in reverse order by reversed chunks array
      while (--precision >= 0) {
        // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
        if (chunks[0][precision] > chunks[1][precision]) {
          return 1;
        } else if (chunks[0][precision] === chunks[1][precision]) {
          if (precision === 0) {
            // all version chunks are same
            return 0;
          }
        } else {
          return -1;
        }
      }
    }

    /**
     * Check if browser is unsupported
     *
     * @example
     *   bowser.isUnsupportedBrowser({
     *     msie: "10",
     *     firefox: "23",
     *     chrome: "29",
     *     safari: "5.1",
     *     opera: "16",
     *     phantom: "534"
     *   });
     *
     * @param  {Object}  minVersions map of minimal version to browser
     * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
     * @param  {String}  [ua] user agent string
     * @return {Boolean}
     */
    function isUnsupportedBrowser(minVersions, strictMode, ua) {
      var _bowser = bowser;

      // make strictMode param optional with ua param usage
      if (typeof strictMode === 'string') {
        ua = strictMode;
        strictMode = void 0;
      }

      if (strictMode === void 0) {
        strictMode = false;
      }
      if (ua) {
        _bowser = detect(ua);
      }

      var version = "" + _bowser.version;
      for (var browser in minVersions) {
        if (minVersions.hasOwnProperty(browser)) {
          if (_bowser[browser]) {
            if (typeof minVersions[browser] !== 'string') {
              throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
            }

            // browser version and min supported version.
            return compareVersions([version, minVersions[browser]]) < 0;
          }
        }
      }

      return strictMode; // not found
    }

    /**
     * Check if browser is supported
     *
     * @param  {Object} minVersions map of minimal version to browser
     * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
     * @param  {String}  [ua] user agent string
     * @return {Boolean}
     */
    function check(minVersions, strictMode, ua) {
      return !isUnsupportedBrowser(minVersions, strictMode, ua);
    }

    bowser.isUnsupportedBrowser = isUnsupportedBrowser;
    bowser.compareVersions = compareVersions;
    bowser.check = check;

    /*
     * Set our detect method to the main bowser object so we can
     * reuse it to test other user agents.
     * This is needed to implement future tests.
     */
    bowser._detect = detect;

    /*
     * Set our detect public method to the main bowser object
     * This is needed to implement bowser in server side
     */
    bowser.detect = detect;
    return bowser;
  });
  });

  var bowser$1 = (bowser && typeof bowser === 'object' && 'default' in bowser ? bowser['default'] : bowser);

  var prefixByBrowser = {
    chrome: 'Webkit',
    safari: 'Webkit',
    ios: 'Webkit',
    android: 'Webkit',
    phantom: 'Webkit',
    opera: 'Webkit',
    webos: 'Webkit',
    blackberry: 'Webkit',
    bada: 'Webkit',
    tizen: 'Webkit',
    chromium: 'Webkit',
    vivaldi: 'Webkit',
    firefox: 'Moz',
    seamoney: 'Moz',
    sailfish: 'Moz',
    msie: 'ms',
    msedge: 'ms'
  };

  var browserByCanIuseAlias = {
    chrome: 'chrome',
    chromium: 'chrome',
    safari: 'safari',
    firfox: 'firefox',
    msedge: 'edge',
    opera: 'opera',
    vivaldi: 'opera',
    msie: 'ie'
  };

  function getBrowserName(browserInfo) {
    if (browserInfo.firefox) {
      return 'firefox';
    }

    if (browserInfo.mobile || browserInfo.tablet) {
      if (browserInfo.ios) {
        return 'ios_saf';
      } else if (browserInfo.android) {
        return 'android';
      } else if (browserInfo.opera) {
        return 'op_mini';
      }
    }

    for (var browser in browserByCanIuseAlias) {
      if (browserInfo.hasOwnProperty(browser)) {
        return browserByCanIuseAlias[browser];
      }
    }
  }

  /**
   * Uses bowser to get default browser browserInformation such as version and name
   * Evaluates bowser browserInfo and adds vendorPrefix browserInformation
   * @param {string} userAgent - userAgent that gets evaluated
   */
  function getBrowserInformation(userAgent) {
    var browserInfo = bowser$1._detect(userAgent);

    if (browserInfo.yandexbrowser) {
      browserInfo = bowser$1._detect(userAgent.replace(/YaBrowser\/[0-9.]*/, ''));
    }

    for (var browser in prefixByBrowser) {
      if (browserInfo.hasOwnProperty(browser)) {
        var prefix = prefixByBrowser[browser];

        browserInfo.jsPrefix = prefix;
        browserInfo.cssPrefix = '-' + prefix.toLowerCase() + '-';
        break;
      }
    }

    browserInfo.browserName = getBrowserName(browserInfo);

    // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
    if (browserInfo.version) {
      browserInfo.browserVersion = parseFloat(browserInfo.version);
    } else {
      browserInfo.browserVersion = parseInt(parseFloat(browserInfo.osversion), 10);
    }

    browserInfo.osVersion = parseFloat(browserInfo.osversion);

    // iOS forces all browsers to use Safari under the hood
    // as the Safari version seems to match the iOS version
    // we just explicitely use the osversion instead
    // https://github.com/rofrischmann/inline-style-prefixer/issues/72
    if (browserInfo.browserName === 'ios_saf' && browserInfo.browserVersion > browserInfo.osVersion) {
      browserInfo.browserVersion = browserInfo.osVersion;
    }

    // seperate native android chrome
    // https://github.com/rofrischmann/inline-style-prefixer/issues/45
    if (browserInfo.browserName === 'android' && browserInfo.chrome && browserInfo.browserVersion > 37) {
      browserInfo.browserName = 'and_chr';
    }

    // For android < 4.4 we want to check the osversion
    // not the chrome version, see issue #26
    // https://github.com/rofrischmann/inline-style-prefixer/issues/26
    if (browserInfo.browserName === 'android' && browserInfo.osVersion < 5) {
      browserInfo.browserVersion = browserInfo.osVersion;
    }

    // Samsung browser are basically build on Chrome > 44
    // https://github.com/rofrischmann/inline-style-prefixer/issues/102
    if (browserInfo.browserName === 'android' && browserInfo.samsungBrowser) {
      browserInfo.browserName = 'and_chr';
      browserInfo.browserVersion = 44;
    }

    return browserInfo;
  }

  function getPrefixedKeyframes(browserName, browserVersion, cssPrefix) {
    var prefixedKeyframes = 'keyframes';

    if (browserName === 'chrome' && browserVersion < 43 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 || browserName === 'opera' && browserVersion < 30 || browserName === 'android' && browserVersion <= 4.4 || browserName === 'and_uc') {
      return cssPrefix + prefixedKeyframes;
    }
    return prefixedKeyframes;
  }

  function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function addIfNew(list, value) {
    if (list.indexOf(value) === -1) {
      list.push(value);
    }
  }

  function addNewValuesOnly(list, values) {
    if (Array.isArray(values)) {
      for (var i = 0, len = values.length; i < len; ++i) {
        addIfNew(list, values[i]);
      }
    } else {
      addIfNew(list, values);
    }
  }

  function isObject(value) {
    return value instanceof Object && !Array.isArray(value);
  }

  function prefixValue(plugins, property, value, style, metaData) {
    for (var i = 0, len = plugins.length; i < len; ++i) {
      var processedValue = plugins[i](property, value, style, metaData);

      // we can stop processing if a value is returned
      // as all plugin criteria are unique
      if (processedValue) {
        return processedValue;
      }
    }
  }

  function createPrefixer(_ref) {
    var prefixMap = _ref.prefixMap,
        plugins = _ref.plugins;
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (style) {
      return style;
    };

    return function () {
      /**
       * Instantiante a new prefixer
       * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
       * @param {string} keepUnprefixed - keeps unprefixed properties and values
       */
      function Prefixer() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        babelHelpers.classCallCheck(this, Prefixer);

        var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

        this._userAgent = options.userAgent || defaultUserAgent;
        this._keepUnprefixed = options.keepUnprefixed || false;

        if (this._userAgent) {
          this._browserInfo = getBrowserInformation(this._userAgent);
        }

        // Checks if the userAgent was resolved correctly
        if (this._browserInfo && this._browserInfo.cssPrefix) {
          this.prefixedKeyframes = getPrefixedKeyframes(this._browserInfo.browserName, this._browserInfo.browserVersion, this._browserInfo.cssPrefix);
        } else {
          this._useFallback = true;
          return false;
        }

        var prefixData = this._browserInfo.browserName && prefixMap[this._browserInfo.browserName];
        if (prefixData) {
          this._requiresPrefix = {};

          for (var property in prefixData) {
            if (prefixData[property] >= this._browserInfo.browserVersion) {
              this._requiresPrefix[property] = true;
            }
          }

          this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
        } else {
          this._useFallback = true;
        }

        this._metaData = {
          browserVersion: this._browserInfo.browserVersion,
          browserName: this._browserInfo.browserName,
          cssPrefix: this._browserInfo.cssPrefix,
          jsPrefix: this._browserInfo.jsPrefix,
          keepUnprefixed: this._keepUnprefixed,
          requiresPrefix: this._requiresPrefix
        };
      }

      babelHelpers.createClass(Prefixer, [{
        key: 'prefix',
        value: function prefix(style) {
          // use static prefixer as fallback if userAgent can not be resolved
          if (this._useFallback) {
            return fallback(style);
          }

          // only add prefixes if needed
          if (!this._hasPropsRequiringPrefix) {
            return style;
          }

          return this._prefixStyle(style);
        }
      }, {
        key: '_prefixStyle',
        value: function _prefixStyle(style) {
          for (var property in style) {
            var value = style[property];

            // handle nested objects
            if (isObject(value)) {
              style[property] = this.prefix(value);
              // handle array values
            } else if (Array.isArray(value)) {
              var combinedValue = [];

              for (var i = 0, len = value.length; i < len; ++i) {
                var processedValue = prefixValue(plugins, property, value[i], style, this._metaData);
                addNewValuesOnly(combinedValue, processedValue || value[i]);
              }

              // only modify the value if it was touched
              // by any plugin to prevent unnecessary mutations
              if (combinedValue.length > 0) {
                style[property] = combinedValue;
              }
            } else {
              var _processedValue = prefixValue(plugins, property, value, style, this._metaData);

              // only modify the value if it was touched
              // by any plugin to prevent unnecessary mutations
              if (_processedValue) {
                style[property] = _processedValue;
              }

              // add prefixes to properties
              if (this._requiresPrefix.hasOwnProperty(property)) {
                style[this._browserInfo.jsPrefix + capitalizeString(property)] = value;
                if (!this._keepUnprefixed) {
                  delete style[property];
                }
              }
            }
          }

          return style;
        }

        /**
         * Returns a prefixed version of the style object using all vendor prefixes
         * @param {Object} styles - Style object that gets prefixed properties added
         * @returns {Object} - Style object with prefixed properties and values
         */

      }], [{
        key: 'prefixAll',
        value: function prefixAll(styles) {
          return fallback(styles);
        }
      }]);
      return Prefixer;
    }();
  }

  function getPrefixedValue(prefixedValue, value, keepUnprefixed) {
    if (keepUnprefixed) {
      return [prefixedValue, value];
    }
    return prefixedValue;
  }

  var grabValues = {
    grab: true,
    grabbing: true
  };

  var zoomValues = {
    'zoom-in': true,
    'zoom-out': true
  };

  function cursor(property, value, style, _ref) {
    var browserName = _ref.browserName,
        browserVersion = _ref.browserVersion,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed;

    // adds prefixes for firefox, chrome, safari, and opera regardless of
    // version until a reliable browser support info can be found
    // see: https://github.com/rofrischmann/inline-style-prefixer/issues/79
    if (property === 'cursor' && grabValues[value] && (browserName === 'firefox' || browserName === 'chrome' || browserName === 'safari' || browserName === 'opera')) {
      return getPrefixedValue(cssPrefix + value, value, keepUnprefixed);
    }

    if (property === 'cursor' && zoomValues[value] && (browserName === 'firefox' && browserVersion < 24 || browserName === 'chrome' && browserVersion < 37 || browserName === 'safari' && browserVersion < 9 || browserName === 'opera' && browserVersion < 24)) {
      return getPrefixedValue(cssPrefix + value, value, keepUnprefixed);
    }
  }

  function crossFade(property, value, style, _ref) {
    var browserName = _ref.browserName,
        browserVersion = _ref.browserVersion,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed;

    if (typeof value === 'string' && value.indexOf('cross-fade(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || (browserName === 'ios_saf' || browserName === 'safari') && browserVersion < 10)) {
      return getPrefixedValue(value.replace(/cross-fade\(/g, cssPrefix + 'cross-fade('), value, keepUnprefixed);
    }
  }

  function filter(property, value, style, _ref) {
    var browserName = _ref.browserName,
        browserVersion = _ref.browserVersion,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed;

    if (typeof value === 'string' && value.indexOf('filter(') > -1 && (browserName === 'ios_saf' || browserName === 'safari' && browserVersion < 9.1)) {
      return getPrefixedValue(value.replace(/filter\(/g, cssPrefix + 'filter('), value, keepUnprefixed);
    }
  }

  var values = {
    flex: true,
    'inline-flex': true
  };

  function flex(property, value, style, _ref) {
    var browserName = _ref.browserName,
        browserVersion = _ref.browserVersion,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed;

    if (property === 'display' && values[value] && (browserName === 'chrome' && browserVersion < 29 && browserVersion > 20 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 && browserVersion > 6 || browserName === 'opera' && (browserVersion === 15 || browserVersion === 16))) {
      return getPrefixedValue(cssPrefix + value, value, keepUnprefixed);
    }
  }

  var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple',
    flex: 'box',
    'inline-flex': 'inline-box'
  };

  var alternativeProps = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines'
  };

  var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
  var properties = Object.keys(alternativeProps).concat(otherProps);

  function flexboxOld(property, value, style, _ref) {
    var browserName = _ref.browserName,
        browserVersion = _ref.browserVersion,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed,
        requiresPrefix = _ref.requiresPrefix;

    if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'firefox' && browserVersion < 22 || browserName === 'chrome' && browserVersion < 21 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion <= 6.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
      delete requiresPrefix[property];

      if (!keepUnprefixed && !Array.isArray(style[property])) {
        delete style[property];
      }
      if (property === 'flexDirection' && typeof value === 'string') {
        if (value.indexOf('column') > -1) {
          style.WebkitBoxOrient = 'vertical';
        } else {
          style.WebkitBoxOrient = 'horizontal';
        }
        if (value.indexOf('reverse') > -1) {
          style.WebkitBoxDirection = 'reverse';
        } else {
          style.WebkitBoxDirection = 'normal';
        }
      }
      if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
        return getPrefixedValue(cssPrefix + alternativeValues[value], value, keepUnprefixed);
      }
      if (alternativeProps.hasOwnProperty(property)) {
        style[alternativeProps[property]] = alternativeValues[value] || value;
      }
    }
  }

  var values$1 = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

  function gradient(property, value, style, _ref) {
    var browserName = _ref.browserName,
        browserVersion = _ref.browserVersion,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed;

    if (typeof value === 'string' && values$1.test(value) && (browserName === 'firefox' && browserVersion < 16 || browserName === 'chrome' && browserVersion < 26 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 7 || (browserName === 'opera' || browserName === 'op_mini') && browserVersion < 12.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
      return getPrefixedValue(cssPrefix + value, value, keepUnprefixed);
    }
  }

  function imageSet(property, value, style, _ref) {
    var browserName = _ref.browserName,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed;

    if (typeof value === 'string' && value.indexOf('image-set(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || browserName === 'and_uc' || browserName === 'ios_saf' || browserName === 'safari')) {
      return getPrefixedValue(value.replace(/image-set\(/g, cssPrefix + 'image-set('), value, keepUnprefixed);
    }
  }

  function position(property, value, style, _ref) {
    var browserName = _ref.browserName,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed;

    if (property === 'position' && value === 'sticky' && (browserName === 'safari' || browserName === 'ios_saf')) {
      return getPrefixedValue(cssPrefix + value, value, keepUnprefixed);
    }
  }

  var properties$1 = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };
  var values$2 = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true

    // TODO: chrome & opera support it
  };function sizing(property, value, style, _ref) {
    var cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed;

    // This might change in the future
    // Keep an eye on it
    if (properties$1.hasOwnProperty(property) && values$2.hasOwnProperty(value)) {
      return getPrefixedValue(cssPrefix + value, value, keepUnprefixed);
    }
  }

  var index = __commonjs(function (module) {
  'use strict';

  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache = {};

  function hyphenateStyleName(string) {
    return string in cache ? cache[string] : cache[string] = string.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern, '-ms-');
  }

  module.exports = hyphenateStyleName;
  });

  var require$$0 = (index && typeof index === 'object' && 'default' in index ? index['default'] : index);

  var hyphenateProperty = __commonjs(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hyphenateProperty;

  var _hyphenateStyleName = require$$0;

  var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function hyphenateProperty(property) {
    return (0, _hyphenateStyleName2.default)(property);
  }
  module.exports = exports['default'];
  });

  var hyphenateProperty$1 = (hyphenateProperty && typeof hyphenateProperty === 'object' && 'default' in hyphenateProperty ? hyphenateProperty['default'] : hyphenateProperty);

  var properties$2 = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
  };

  var requiresPrefixDashCased = void 0;

  function transition(property, value, style, _ref) {
    var cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed,
        requiresPrefix = _ref.requiresPrefix;

    if (typeof value === 'string' && properties$2.hasOwnProperty(property)) {
      // memoize the prefix array for later use
      if (!requiresPrefixDashCased) {
        requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
          return hyphenateProperty$1(prop);
        });
      }

      // only split multi values, not cubic beziers
      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

      requiresPrefixDashCased.forEach(function (prop) {
        multipleValues.forEach(function (val, index) {
          if (val.indexOf(prop) > -1 && prop !== 'order') {
            multipleValues[index] = val.replace(prop, cssPrefix + prop) + (keepUnprefixed ? ',' + val : '');
          }
        });
      });

      return multipleValues.join(',');
    }
  }

  function prefixProperty(prefixProperties, property, style) {
    if (prefixProperties.hasOwnProperty(property)) {
      var newStyle = {};
      var requiredPrefixes = prefixProperties[property];
      var capitalizedProperty = capitalizeString(property);
      var keys = Object.keys(style);
      for (var i = 0; i < keys.length; i++) {
        var styleProperty = keys[i];
        if (styleProperty === property) {
          for (var j = 0; j < requiredPrefixes.length; j++) {
            newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
          }
        }
        newStyle[styleProperty] = style[styleProperty];
      }
      return newStyle;
    }
    return style;
  }

  function createPrefixer$1(_ref) {
    var prefixMap = _ref.prefixMap,
        plugins = _ref.plugins;

    function prefixAll(style) {
      for (var property in style) {
        var value = style[property];

        // handle nested objects
        if (isObject(value)) {
          style[property] = prefixAll(value);
          // handle array values
        } else if (Array.isArray(value)) {
          var combinedValue = [];

          for (var i = 0, len = value.length; i < len; ++i) {
            var processedValue = prefixValue(plugins, property, value[i], style, prefixMap);
            addNewValuesOnly(combinedValue, processedValue || value[i]);
          }

          // only modify the value if it was touched
          // by any plugin to prevent unnecessary mutations
          if (combinedValue.length > 0) {
            style[property] = combinedValue;
          }
        } else {
          var _processedValue = prefixValue(plugins, property, value, style, prefixMap);

          // only modify the value if it was touched
          // by any plugin to prevent unnecessary mutations
          if (_processedValue) {
            style[property] = _processedValue;
          }

          style = prefixProperty(prefixMap, property, style);
        }
      }

      return style;
    }

    return prefixAll;
  }

  var w = ["Webkit"];
  var m = ["Moz"];
  var ms = ["ms"];
  var wm = ["Webkit", "Moz"];
  var wms = ["Webkit", "ms"];
  var wmms = ["Webkit", "Moz", "ms"];

  var staticData = {
    plugins: [],
    prefixMap: { "appearance": wm, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "userSelect": wmms, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "clipPath": w, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "filter": w, "hyphens": wms, "flowInto": wms, "flowFrom": wms, "breakBefore": wms, "breakAfter": wms, "breakInside": wms, "regionFragment": wms, "writingMode": wms, "tabSize": m, "fontFeatureSettings": w, "columnCount": w, "columnFill": w, "columnGap": w, "columnRule": w, "columnRuleColor": w, "columnRuleStyle": w, "columnRuleWidth": w, "columns": w, "columnSpan": w, "columnWidth": w, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "flex": w, "flexBasis": w, "flexDirection": w, "flexGrow": w, "flexFlow": w, "flexShrink": w, "flexWrap": w, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w }
  };

  var prefixes = ['-webkit-', '-moz-', ''];

  var values$3 = {
    'zoom-in': true,
    'zoom-out': true,
    grab: true,
    grabbing: true
  };

  function cursor$1(property, value) {
    if (property === 'cursor' && values$3.hasOwnProperty(value)) {
      return prefixes.map(function (prefix) {
        return prefix + value;
      });
    }
  }

  var isPrefixedValue = __commonjs(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isPrefixedValue;
  var regex = /-webkit-|-moz-|-ms-/;

  function isPrefixedValue(value) {
    return typeof value === 'string' && regex.test(value);
  }
  module.exports = exports['default'];
  });

  var isPrefixedValue$1 = (isPrefixedValue && typeof isPrefixedValue === 'object' && 'default' in isPrefixedValue ? isPrefixedValue['default'] : isPrefixedValue);

  // http://caniuse.com/#search=cross-fade
  var prefixes$1 = ['-webkit-', ''];

  function crossFade$1(property, value) {
    if (typeof value === 'string' && !isPrefixedValue$1(value) && value.indexOf('cross-fade(') > -1) {
      return prefixes$1.map(function (prefix) {
        return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
      });
    }
  }

  // http://caniuse.com/#feat=css-filter-function
  var prefixes$2 = ['-webkit-', ''];

  function filter$1(property, value) {
    if (typeof value === 'string' && !isPrefixedValue$1(value) && value.indexOf('filter(') > -1) {
      return prefixes$2.map(function (prefix) {
        return value.replace(/filter\(/g, prefix + 'filter(');
      });
    }
  }

  var values$4 = {
    flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
    'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
  };

  function flex$1(property, value) {
    if (property === 'display' && values$4.hasOwnProperty(value)) {
      return values$4[value];
    }
  }

  var alternativeValues$1 = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple'
  };

  var alternativeProps$1 = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines'
  };

  function flexboxOld$1(property, value, style) {
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }
      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }
    if (alternativeProps$1.hasOwnProperty(property)) {
      style[alternativeProps$1[property]] = alternativeValues$1[value] || value;
    }
  }

  var prefixes$3 = ['-webkit-', '-moz-', ''];
  var values$5 = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

  function gradient$1(property, value) {
    if (typeof value === 'string' && !isPrefixedValue$1(value) && values$5.test(value)) {
      return prefixes$3.map(function (prefix) {
        return prefix + value;
      });
    }
  }

  // http://caniuse.com/#feat=css-image-set
  var prefixes$4 = ['-webkit-', ''];

  function imageSet$1(property, value) {
    if (typeof value === 'string' && !isPrefixedValue$1(value) && value.indexOf('image-set(') > -1) {
      return prefixes$4.map(function (prefix) {
        return value.replace(/image-set\(/g, prefix + 'image-set(');
      });
    }
  }

  function position$1(property, value) {
    if (property === 'position' && value === 'sticky') {
      return ['-webkit-sticky', 'sticky'];
    }
  }

  var prefixes$5 = ['-webkit-', '-moz-', ''];

  var properties$3 = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };
  var values$6 = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true
  };

  function sizing$1(property, value) {
    if (properties$3.hasOwnProperty(property) && values$6.hasOwnProperty(value)) {
      return prefixes$5.map(function (prefix) {
        return prefix + value;
      });
    }
  }

  var properties$4 = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
  };

  var prefixMapping = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    ms: '-ms-'
  };

  function prefixValue$1(value, propertyPrefixMap) {
    if (isPrefixedValue$1(value)) {
      return value;
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    for (var i = 0, len = multipleValues.length; i < len; ++i) {
      var singleValue = multipleValues[i];
      var values = [singleValue];
      for (var property in propertyPrefixMap) {
        var dashCaseProperty = hyphenateProperty$1(property);

        if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          var prefixes = propertyPrefixMap[property];
          for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
            // join all prefixes and create a new value
            values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
          }
        }
      }

      multipleValues[i] = values.join(',');
    }

    return multipleValues.join(',');
  }

  function transition$1(property, value, style, propertyPrefixMap) {
    // also check for already prefixed transitions
    if (typeof value === 'string' && properties$4.hasOwnProperty(property)) {
      var outputValue = prefixValue$1(value, propertyPrefixMap);
      // if the property is already prefixed
      var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
        return !/-moz-|-ms-/.test(val);
      }).join(',');

      if (property.indexOf('Webkit') > -1) {
        return webkitOutput;
      }

      var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
        return !/-webkit-|-ms-/.test(val);
      }).join(',');

      if (property.indexOf('Moz') > -1) {
        return mozOutput;
      }

      style['Webkit' + capitalizeString(property)] = webkitOutput;
      style['Moz' + capitalizeString(property)] = mozOutput;
      return outputValue;
    }
  }

  var plugins$1 = [crossFade$1, cursor$1, filter$1, flexboxOld$1, gradient$1, imageSet$1, position$1, sizing$1, transition$1, flex$1];

  var prefixAll = createPrefixer$1({
    prefixMap: staticData.prefixMap,
    plugins: plugins$1
  });

  var dynamicData = {
    plugins: [],
    prefixMap: { "chrome": { "appearance": 66, "textEmphasisPosition": 66, "textEmphasis": 66, "textEmphasisStyle": 66, "textEmphasisColor": 66, "boxDecorationBreak": 66, "maskImage": 66, "maskMode": 66, "maskRepeat": 66, "maskPosition": 66, "maskClip": 66, "maskOrigin": 66, "maskSize": 66, "maskComposite": 66, "mask": 66, "maskBorderSource": 66, "maskBorderMode": 66, "maskBorderSlice": 66, "maskBorderWidth": 66, "maskBorderOutset": 66, "maskBorderRepeat": 66, "maskBorder": 66, "maskType": 66, "textDecorationStyle": 56, "textDecorationSkip": 56, "textDecorationLine": 56, "textDecorationColor": 56 }, "safari": { "appearance": 11, "userSelect": 11, "backdropFilter": 11, "fontKerning": 9, "scrollSnapType": 10.1, "scrollSnapPointsX": 10.1, "scrollSnapPointsY": 10.1, "scrollSnapDestination": 10.1, "scrollSnapCoordinate": 10.1, "boxDecorationBreak": 11, "clipPath": 11, "maskImage": 11, "maskMode": 11, "maskRepeat": 11, "maskPosition": 11, "maskClip": 11, "maskOrigin": 11, "maskSize": 11, "maskComposite": 11, "mask": 11, "maskBorderSource": 11, "maskBorderMode": 11, "maskBorderSlice": 11, "maskBorderWidth": 11, "maskBorderOutset": 11, "maskBorderRepeat": 11, "maskBorder": 11, "maskType": 11, "textDecorationStyle": 11, "textDecorationSkip": 11, "textDecorationLine": 11, "textDecorationColor": 11, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "writingMode": 10.1 }, "firefox": { "appearance": 60, "userSelect": 60, "tabSize": 60 }, "opera": { "appearance": 50, "userSelect": 40, "textEmphasisPosition": 50, "textEmphasis": 50, "textEmphasisStyle": 50, "textEmphasisColor": 50, "boxDecorationBreak": 50, "clipPath": 41, "maskImage": 50, "maskMode": 50, "maskRepeat": 50, "maskPosition": 50, "maskClip": 50, "maskOrigin": 50, "maskSize": 50, "maskComposite": 50, "mask": 50, "maskBorderSource": 50, "maskBorderMode": 50, "maskBorderSlice": 50, "maskBorderWidth": 50, "maskBorderOutset": 50, "maskBorderRepeat": 50, "maskBorder": 50, "maskType": 50, "textDecorationStyle": 43, "textDecorationSkip": 43, "textDecorationLine": 43, "textDecorationColor": 43, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36, "writingMode": 34 }, "ie": { "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11, "writingMode": 11 }, "edge": { "userSelect": 17, "wrapFlow": 17, "wrapThrough": 17, "wrapMargin": 17, "scrollSnapType": 17, "scrollSnapPointsX": 17, "scrollSnapPointsY": 17, "scrollSnapDestination": 17, "scrollSnapCoordinate": 17, "hyphens": 17, "flowInto": 17, "flowFrom": 17, "breakBefore": 17, "breakAfter": 17, "breakInside": 17, "regionFragment": 17, "gridTemplateColumns": 15, "gridTemplateRows": 15, "gridTemplateAreas": 15, "gridTemplate": 15, "gridAutoColumns": 15, "gridAutoRows": 15, "gridAutoFlow": 15, "grid": 15, "gridRowStart": 15, "gridColumnStart": 15, "gridRowEnd": 15, "gridRow": 15, "gridColumn": 15, "gridColumnEnd": 15, "gridColumnGap": 15, "gridRowGap": 15, "gridArea": 15, "gridGap": 15 }, "ios_saf": { "appearance": 11, "userSelect": 11, "backdropFilter": 11, "fontKerning": 11, "scrollSnapType": 10.3, "scrollSnapPointsX": 10.3, "scrollSnapPointsY": 10.3, "scrollSnapDestination": 10.3, "scrollSnapCoordinate": 10.3, "boxDecorationBreak": 11, "clipPath": 11, "maskImage": 11, "maskMode": 11, "maskRepeat": 11, "maskPosition": 11, "maskClip": 11, "maskOrigin": 11, "maskSize": 11, "maskComposite": 11, "mask": 11, "maskBorderSource": 11, "maskBorderMode": 11, "maskBorderSlice": 11, "maskBorderWidth": 11, "maskBorderOutset": 11, "maskBorderRepeat": 11, "maskBorder": 11, "maskType": 11, "textSizeAdjust": 11, "textDecorationStyle": 11, "textDecorationSkip": 11, "textDecorationLine": 11, "textDecorationColor": 11, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "writingMode": 10.3 }, "android": { "appearance": 62, "textEmphasisPosition": 62, "textEmphasis": 62, "textEmphasisStyle": 62, "textEmphasisColor": 62, "boxDecorationBreak": 62, "maskImage": 62, "maskMode": 62, "maskRepeat": 62, "maskPosition": 62, "maskClip": 62, "maskOrigin": 62, "maskSize": 62, "maskComposite": 62, "mask": 62, "maskBorderSource": 62, "maskBorderMode": 62, "maskBorderSlice": 62, "maskBorderWidth": 62, "maskBorderOutset": 62, "maskBorderRepeat": 62, "maskBorder": 62, "maskType": 62 }, "and_chr": { "appearance": 62, "textEmphasisPosition": 62, "textEmphasis": 62, "textEmphasisStyle": 62, "textEmphasisColor": 62, "boxDecorationBreak": 62, "maskImage": 62, "maskMode": 62, "maskRepeat": 62, "maskPosition": 62, "maskClip": 62, "maskOrigin": 62, "maskSize": 62, "maskComposite": 62, "mask": 62, "maskBorderSource": 62, "maskBorderMode": 62, "maskBorderSlice": 62, "maskBorderWidth": 62, "maskBorderOutset": 62, "maskBorderRepeat": 62, "maskBorder": 62, "maskType": 62 }, "and_uc": { "flex": 11.4, "flexBasis": 11.4, "flexDirection": 11.4, "flexGrow": 11.4, "flexFlow": 11.4, "flexShrink": 11.4, "flexWrap": 11.4, "alignContent": 11.4, "alignItems": 11.4, "alignSelf": 11.4, "justifyContent": 11.4, "order": 11.4, "transform": 11.4, "transformOrigin": 11.4, "transformOriginX": 11.4, "transformOriginY": 11.4, "backfaceVisibility": 11.4, "perspective": 11.4, "perspectiveOrigin": 11.4, "transformStyle": 11.4, "transformOriginZ": 11.4, "animation": 11.4, "animationDelay": 11.4, "animationDirection": 11.4, "animationFillMode": 11.4, "animationDuration": 11.4, "animationIterationCount": 11.4, "animationName": 11.4, "animationPlayState": 11.4, "animationTimingFunction": 11.4, "appearance": 11.4, "userSelect": 11.4, "textEmphasisPosition": 11.4, "textEmphasis": 11.4, "textEmphasisStyle": 11.4, "textEmphasisColor": 11.4, "clipPath": 11.4, "maskImage": 11.4, "maskMode": 11.4, "maskRepeat": 11.4, "maskPosition": 11.4, "maskClip": 11.4, "maskOrigin": 11.4, "maskSize": 11.4, "maskComposite": 11.4, "mask": 11.4, "maskBorderSource": 11.4, "maskBorderMode": 11.4, "maskBorderSlice": 11.4, "maskBorderWidth": 11.4, "maskBorderOutset": 11.4, "maskBorderRepeat": 11.4, "maskBorder": 11.4, "maskType": 11.4, "textSizeAdjust": 11.4, "filter": 11.4, "hyphens": 11.4, "fontFeatureSettings": 11.4, "breakAfter": 11.4, "breakBefore": 11.4, "breakInside": 11.4, "columnCount": 11.4, "columnFill": 11.4, "columnGap": 11.4, "columnRule": 11.4, "columnRuleColor": 11.4, "columnRuleStyle": 11.4, "columnRuleWidth": 11.4, "columns": 11.4, "columnSpan": 11.4, "columnWidth": 11.4, "writingMode": 11.4 }, "op_mini": {} }
  };

  var plugins = [crossFade, cursor, filter, flexboxOld, gradient, imageSet, position, sizing, transition, flex];

  var Prefixer = createPrefixer({
    prefixMap: dynamicData.prefixMap,
    plugins: plugins
  }, prefixAll);

  return Prefixer;

}));
//# sourceMappingURL=inline-style-prefixer.js.map