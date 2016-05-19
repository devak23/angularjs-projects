(function () {
  "use strict";

  // ------------------ HomeController ----------------------------
  angular.module("TaskManagerApp")
    .controller('HomeController', HomeController)
    .controller('ViewTaskController', ViewTaskController)
    .controller('NewTaskController', NewTaskController)
    .controller('TaskListController', TaskListController);

  HomeController.$inject = ['$scope'];
  function HomeController($scope) {
    $scope.title = "Task Manager"
  }

  // ------------------ ViewTaskController ----------------------------//
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
  NewTaskController.$inject = ['$scope','TaskVO','$log', '$location', 'toaster'];
  function NewTaskController($scope, TaskVO, $log, $location, toaster) {
    var vm = this;
    this.taskVO = new TaskVO();

    this.modalOptions = {
      closeButtonText : "Cancel",
      actionButtonText : "Save",
      headerText: "Create New Task",
      close: function (result) {
        $uibModalInstance.dismiss('close');
      },
      ok : function (result) {
        vm.taskVO.quickSave(vm.taskVO.task);
        toaster.pop({
          type: 'success',
          title: 'Success!',
          body: 'Task has been saved successfully and should now appear in the list of tasks',
          showCloseButton: true
        });

        $uibModalInstance.close(result);
      }
    };

    this.saveTask = function (taskVO) {
      vm.taskVO.saveTask(task);
      toaster.pop({
        type: 'success',
        title: 'Success!',
        body: 'Task has been saved successfully and should now appear in the list of tasks',
        showCloseButton: true
      });
    };
  }
  
  // ------------------ TaskListController ----------------------------//
  TaskListController.$inject = ['$log', '$location', 'TaskVO', 'modalDlgSvc', '$timeout', 'toaster'];
  function TaskListController($log, $location, TaskVO, modalDlgSvc, $timeout, toaster) {
    var vm = this;
    vm.taskVO = new TaskVO();
    vm.taskVO.loadTasks();


    vm.deleteTask = function (task) {
      var modalOptions = {
        closeButtonText: "Cancel",
        actionButtonText: "Delete Task",
        headerText: "Please confirm",
        bodyText: "Are you sure you want to delete " + task.title + " ?"
      };

      modalDlgSvc.showModal({}, modalOptions)
        .then(function (result) {
          $log.info("deleting task: " + task.title);
          vm.taskVO.deleteTask(task);
          toaster.pop({
            type: 'info',
            title: 'Delete successful',
            body: 'Task - ' + task.title + ' was deleted successfully',
            showCloseButton: true
          })
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
  }
})();
