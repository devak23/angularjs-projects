/**
 * Created by abhaykulkarni on 08/05/16.
 */

(function () {
  "use strict";

  angular
    .module('TaskManagerApp',[
      'ngRoute'
      ,'ui.bootstrap'
      ,'ngAnimate'
      ,'infinite-scroll'
      ,'toaster'
      ,'ngMessages'
    ])
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/all_tasks.html',
        controller: 'TaskListController',
        controllerAs: 'tlc'
      })
      .when('/new', {
        templateUrl: 'pages/new_task.html',
        controller: 'NewTaskController',
        controllerAs: 'ntc'
      })
  }]);
})();
