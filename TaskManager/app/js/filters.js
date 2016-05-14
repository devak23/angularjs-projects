/**
 * Created by abhaykulkarni on 08/05/16.
 */

(function () {
  "use strict";
  angular.module('TaskManagerApp')
    .filter('none', function () {
      return function(input) {
        if (isEmpty(input)) return "(None)";
        else return input;
      }
    });
})();