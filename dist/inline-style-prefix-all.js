(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.InlineStylePrefixAll = factory());
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

  function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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

  function createPrefixer(_ref) {
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

  var values = {
    'zoom-in': true,
    'zoom-out': true,
    grab: true,
    grabbing: true
  };

  function cursor(property, value) {
    if (property === 'cursor' && values.hasOwnProperty(value)) {
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

  function crossFade(property, value) {
    if (typeof value === 'string' && !isPrefixedValue$1(value) && value.indexOf('cross-fade(') > -1) {
      return prefixes$1.map(function (prefix) {
        return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
      });
    }
  }

  // http://caniuse.com/#feat=css-filter-function
  var prefixes$2 = ['-webkit-', ''];

  function filter(property, value) {
    if (typeof value === 'string' && !isPrefixedValue$1(value) && value.indexOf('filter(') > -1) {
      return prefixes$2.map(function (prefix) {
        return value.replace(/filter\(/g, prefix + 'filter(');
      });
    }
  }

  var values$1 = {
    flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
    'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
  };

  function flex(property, value) {
    if (property === 'display' && values$1.hasOwnProperty(value)) {
      return values$1[value];
    }
  }

  var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple'
  };

  var alternativeProps = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines'
  };

  function flexboxOld(property, value, style) {
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
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }

  var prefixes$3 = ['-webkit-', '-moz-', ''];
  var values$2 = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

  function gradient(property, value) {
    if (typeof value === 'string' && !isPrefixedValue$1(value) && values$2.test(value)) {
      return prefixes$3.map(function (prefix) {
        return prefix + value;
      });
    }
  }

  // http://caniuse.com/#feat=css-image-set
  var prefixes$4 = ['-webkit-', ''];

  function imageSet(property, value) {
    if (typeof value === 'string' && !isPrefixedValue$1(value) && value.indexOf('image-set(') > -1) {
      return prefixes$4.map(function (prefix) {
        return value.replace(/image-set\(/g, prefix + 'image-set(');
      });
    }
  }

  function position(property, value) {
    if (property === 'position' && value === 'sticky') {
      return ['-webkit-sticky', 'sticky'];
    }
  }

  var prefixes$5 = ['-webkit-', '-moz-', ''];

  var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };
  var values$3 = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true
  };

  function sizing(property, value) {
    if (properties.hasOwnProperty(property) && values$3.hasOwnProperty(value)) {
      return prefixes$5.map(function (prefix) {
        return prefix + value;
      });
    }
  }

  var index$1 = __commonjs(function (module) {
  'use strict';

  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache = {};

  function hyphenateStyleName(string) {
    return string in cache ? cache[string] : cache[string] = string.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern, '-ms-');
  }

  module.exports = hyphenateStyleName;
  });

  var require$$0 = (index$1 && typeof index$1 === 'object' && 'default' in index$1 ? index$1['default'] : index$1);

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

  var properties$1 = {
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

  function transition(property, value, style, propertyPrefixMap) {
    // also check for already prefixed transitions
    if (typeof value === 'string' && properties$1.hasOwnProperty(property)) {
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

  var plugins = [crossFade, cursor, filter, flexboxOld, gradient, imageSet, position, sizing, transition, flex];

  var index = createPrefixer({
    prefixMap: staticData.prefixMap,
    plugins: plugins
  });

  return index;

}));
//# sourceMappingURL=inline-style-prefix-all.js.map