(function () {
  angular
  .module('TaskManagerApp')
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