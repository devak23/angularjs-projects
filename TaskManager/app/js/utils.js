/**
 * Created by abhaykulkarni on 08/05/16.
 */

var isEmpty = function (input) {
  if (input == undefined || input == null) return true;

  if (typeof input == 'string') {
    return String(input).trim().length == 0;
  }

  if (input instanceof Array) {
    return input.length == 0;
  }

  if (input instanceof Object || typeof input == 'object') {
    return Object.keys(input).length == 0;
  }

  return false;
};

