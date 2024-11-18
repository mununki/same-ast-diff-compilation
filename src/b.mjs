// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_Array from "rescript/lib/es6/Belt_Array.js";
import * as Primitive_option from "rescript/lib/es6/Primitive_option.js";

function error(path, message, value) {
  let path$1 = path !== undefined ? path : "";
  return {
    TAG: "Error",
    _0: {
      path: path$1,
      message: message,
      value: value
    }
  };
}

function stringToJson(s) {
  return s;
}

function stringFromJson(j) {
  if (!Array.isArray(j) && (j === null || typeof j !== "object") && typeof j !== "number" && typeof j !== "string" && typeof j !== "boolean" || typeof j !== "string") {
    return {
      TAG: "Error",
      _0: {
        path: "",
        message: "Not a string",
        value: j
      }
    };
  } else {
    return {
      TAG: "Ok",
      _0: j
    };
  }
}

function intToJson(i) {
  return i;
}

function optionToJson(encoder, opt) {
  if (opt !== undefined) {
    return encoder(Primitive_option.valFromOption(opt));
  }
  
}

function filterOptional(arr) {
  return Belt_Array.keepMap(arr, param => {
    let v = param[1];
    if (v !== undefined) {
      return [
        param[0],
        Primitive_option.valFromOption(v)
      ];
    }
    
  });
}

let Spice = {
  error: error,
  stringToJson: stringToJson,
  stringFromJson: stringFromJson,
  intToJson: intToJson,
  optionToJson: optionToJson,
  filterOptional: filterOptional
};

export {
  Spice,
}
/* No side effect */
