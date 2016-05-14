(function () {
  "use strict";

  // ------------------ HomeController ----------------------------
  angular.module("TaskManagerApp")
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope) {
    $scope.title = "Task Manager"
  }

  // ------------------ ViewTaskController ----------------------------//
  angular.module("TaskManagerApp")
    .controller('ViewTaskController', ViewTaskController);

  ViewTaskController.$inject = ['$log', '$scope', 'task', '$uibModalInstance'];

  function ViewTaskController($log, $scope, task, $uibModalInstance) {
    this.taskVO = {};
    this.taskVO.modalOptions = {
      closeButtonText : "Close",
      headerText: "Task Details",
      close: function (result) {
        $uibModalInstance.dismiss('close');
      }
    };
    this.taskVO.task = task;
  }

  // ------------------ NewTaskController ----------------------------//
  angular.module('TaskManagerApp')
    .controller('NewTaskController', NewTaskController);

  NewTaskController.$inject = ['$scope','TaskMgrService','$log','$uibModalInstance','taskFactory','toaster'];

  function NewTaskController($scope, TaskMgrService, $log, $uibModalInstance, taskFactory, toaster) {
    var vm = this;
    this.taskVO = TaskMgrService.getTaskVO();
    this.taskVO.assignees = taskFactory.getAssignees();
    this.taskVO.modalOptions = {
      closeButtonText : "Cancel",
      actionButtonText : "Save",
      headerText: "Create New Task",
      close: function (result) {
        $uibModalInstance.dismiss('close');
      },
      ok : function (result) {
        vm.saveTask($scope.taskVO);
        $uibModalInstance.close(result);
      }
    };

    this.saveTask = function (taskVO) {
      TaskMgrService.saveTask(taskVO.task, this.taskVO.allTasks);
      toaster.pop({
        type: 'success',
        title: 'Success!',
        body: 'Task has been saved successfully and should now appear in the list of tasks',
        showCloseButton: true
      });
    }
  }
  
  // ------------------ TaskListController ----------------------------//
  angular.module('TaskManagerApp')
    .controller('TaskListController', TaskListController);

  TaskListController.$inject = [
    '$log'
    , '$location'
    , 'TaskMgrService'
    , 'modalDlgSvc'
    , '$timeout'
    , 'toaster'];
  function TaskListController($log, $location, TaskMgrService, modalDlgSvc, $timeout,toaster) {
    var vm = this;
    vm.taskVO = TaskMgrService.getTaskVO();


    vm.deleteTask = function (task) {
      var modalOptions = {
        closeButtonText: "Cancel",
        actionButtonText: "Delete Task",
        headerText: "Please confirm",
        bodyText: "Are you sure you want to delete " + task.name + " ?"
      };

      modalDlgSvc.showModal({}, modalOptions)
        .then(function (result) {
          $log.info("deleting task: " + task.name);
          TaskMgrService.deleteTask(task, vm.taskVO);
          toaster.pop({
            type: 'info',
            title: 'Delete successful',
            body: 'Task - ' + task.name + ' was deleted successfully',
            showCloseButton: true
          })
        });
    };

    vm.loadMoreTasks = function () {
      $log.info("loading more tasks...");
      $timeout(function () {
        TaskMgrService.loadTasks(vm.taskVO);
      });
    };

    vm.viewTask = function(task) {
      var modalDefaults = {
        backdrop: true,
        keyboard: true,
        modalFade: true,
        templateUrl: 'pages/view_task.html',
        controller: 'ViewTaskController',
        controllerAs: 'vtc',
        resolve: {
          task: task
        }
      };
      modalDlgSvc.showModal(modalDefaults, {});
    };

    vm.addTask = function () {
      $log.debug("Adding new task");
      $location.path('/new');
    };

    vm.addQuickly = function () {
      $log.debug("adding task quickly");
      var modalDefaults = {
        backdrop: true,
        keyboard: true,
        modalFade: true,
        templateUrl: 'pages/quick_add.html',
        controller: 'NewTaskController',
        controllerAs: 'ntc'
      };

      modalDlgSvc.showModal(modalDefaults, {})
        .then(function (result) {
          $log.debug(result);
        });
    };
    vm.loadMoreTasks();
  }
})();
