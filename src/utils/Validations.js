// Check if it is a string
function isString(string) {
  return typeof string === "string";
}

// Check if it is a empty string
function isEmptyString(string) {
  return typeof string === "string" && string.length === 0;
}

// Check if it is a number
function isNumber(number) {
  return typeof number === "number";
}

// Check if it is a boolean value
function isBoolean(data) {
  return typeof data === "boolean";
}

// Check if it is a function
function isFunction(func) {
  return typeof func === "function";
}

// Check if it is a array
function isArray(array) {
  return Array.isArray(array);
}

// Check if it is a empty array
function isEmptyArray(array) {
  return isArray(array) && array.length === 0;
}

// Check if it is a undefined value
function isUndefined(data) {
  return typeof data === "undefined";
}

// Check if it is a object
function isObject(obj) {
  return typeof obj === "object";
}

// Check if it is a empty object
function isEmptyObject(obj) {
  return obj && isObject(obj) && Object.keys(obj).length === 0;
}

export {
  isString,
  isEmptyString,
  isNumber,
  isBoolean,
  isFunction,
  isArray,
  isEmptyArray,
  isUndefined,
  isObject,
  isEmptyObject,
};
