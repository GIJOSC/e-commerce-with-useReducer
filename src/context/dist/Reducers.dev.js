"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productReducer = exports.cartReducer = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cartReducer = function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return _objectSpread({}, state, {
        cart: [].concat(_toConsumableArray(state.cart), [_objectSpread({}, action.payload, {
          qty: 1
        })])
      });

    case "REMOVE_FROM_CART":
      return _objectSpread({}, state, {
        cart: state.cart.filter(function (c) {
          return c.id !== action.payload.id;
        })
      });

    case "CHANGE_CART_QTY":
      return _objectSpread({}, state, {
        cart: state.cart.filter(function (c) {
          return c.id === action.payload.id ? c.qty = action.payload.qty : c.qty;
        })
      });

    default:
      return state;
  }
};

exports.cartReducer = cartReducer;

var productReducer = function productReducer(state, action) {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return _objectSpread({}, state, {
        sort: action.payload
      });

    case "FILTER_BY_STOCK":
      return _objectSpread({}, state, {
        byStock: !state.byStock
      });

    case "FILTER_BY_DELIVERY":
      return _objectSpread({}, state, {
        byFastDelivery: !state.byFastDelivery
      });

    case "FILTER_BY_RATING":
      return _objectSpread({}, state, {
        byRating: action.payload
      });

    case "FILTER_BY_SEARCH":
      return _objectSpread({}, state, {
        searchQuery: action.payload
      });

    case "CLEAR_FILTERS":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0
      };

    default:
      return state;
  }
};

exports.productReducer = productReducer;