"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BillingDetails = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _reactCountryStateFields = require("react-country-state-fields");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const BillingDetails = _ref => {
  let {
    setBillingDetailsObject,
    buttonText,
    disabled,
    currentBillingDetails
  } = _ref;
  const [billingDetails, setBillingDetails] = (0, _react.useState)({
    name: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      postal_code: "",
      state: "",
      stateObj: {},
      country: "",
      countryObj: {}
    }
  });
  (0, _react.useEffect)(() => {
    if (currentBillingDetails) {
      setBillingDetails(currentBillingDetails);
    }
  }, [currentBillingDetails]);
  return /*#__PURE__*/_react.default.createElement(_material.Stack, {
    spacing: 3
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    md: 8
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    p: 2
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    name: "name",
    label: "Business Name",
    type: "text",
    margin: "normal",
    onChange: e => {
      setBillingDetails(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        name: e.target.value
      }));
    },
    value: billingDetails.name
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    name: "line1",
    label: "Address Line 1",
    type: "text",
    margin: "normal",
    onChange: e => {
      setBillingDetails(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        address: _objectSpread(_objectSpread({}, prevState.address), {}, {
          line1: e.target.value
        })
      }));
    },
    value: billingDetails.address.line1
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    name: "line2",
    label: "Address Line 2",
    type: "text",
    margin: "normal",
    onChange: e => {
      setBillingDetails(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        address: _objectSpread(_objectSpread({}, prevState.address), {}, {
          line2: e.target.value
        })
      }));
    },
    value: billingDetails.address.line2
  }), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    md: 7
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    name: "city",
    label: "City / Suburb",
    type: "text",
    margin: "normal",
    onChange: e => {
      setBillingDetails(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        address: _objectSpread(_objectSpread({}, prevState.address), {}, {
          city: e.target.value
        })
      }));
    },
    value: billingDetails.address.city
  })), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    md: 1
  }), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    name: "postal_code",
    label: "Postal Code",
    type: "text",
    margin: "normal",
    onChange: e => {
      setBillingDetails(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        address: _objectSpread(_objectSpread({}, prevState.address), {}, {
          postal_code: e.target.value
        })
      }));
    },
    value: billingDetails.address.postal_code
  }))), /*#__PURE__*/_react.default.createElement(_reactCountryStateFields.VisitorAPIComponents, {
    projectId: "",
    handleCountryChange: countryObj => {
      if (countryObj !== null) {
        setBillingDetails(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
          address: _objectSpread(_objectSpread({}, prevState.address), {}, {
            countryObj: countryObj,
            country: countryObj && countryObj.code ? countryObj.code : ""
          })
        }));
      }
    },
    handleStateChange: stateObj => {
      if (stateObj !== null) {
        setBillingDetails(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
          address: _objectSpread(_objectSpread({}, prevState.address), {}, {
            stateObj: stateObj,
            state: stateObj && stateObj.label ? stateObj.label : ""
          })
        }));
      }
    },
    defaultCountryCode: billingDetails.address.country,
    defaultStateCode: billingDetails.address.stateObj.code
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    md: 7
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    pt: 2,
    pb: 1
  }, /*#__PURE__*/_react.default.createElement(_reactCountryStateFields.CountryField, {
    label: "Country / Territory",
    value: billingDetails.address.countryObj
  }))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    md: 1
  }), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    pt: 2,
    pb: 1
  }, /*#__PURE__*/_react.default.createElement(_reactCountryStateFields.StateField, {
    label: "State / Province",
    fullWidth: true
  })))))))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    disabled: disabled,
    onClick: e => setBillingDetailsObject(billingDetails)
  }, buttonText)));
};
exports.BillingDetails = BillingDetails;