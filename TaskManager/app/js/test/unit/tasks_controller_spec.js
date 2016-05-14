/**
 * Created by abhaykulkarni on 08/05/16.
 */

describe('TaskManagerApp Test Suite', function () {

  beforeEach(function () {
    module('TaskManagerApp');
  });

  describe('Testing HomeController', function () {
    var scope, ctrl;


    beforeEach(function () {
      inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('HomeController', {$scope: scope});
      });

    });

    it('should initialize the title in the scope', function () {
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe('Task Manager');
    });

    it('should load all the available Tasks from the server', function () {
      var allTasks = scope.loadTasks();
      expect(allTasks).toBeDefined();
      expect(allTasks.length).toBeGreaterThan(0);
    });

  });

});