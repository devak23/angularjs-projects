(function () {
  "use strict";
  angular
    .module('TaskManagerApp')
    .service('TaskMgrService', TaskMgrService);

  TaskMgrService.$inject = ['taskFactory', '$log'];

  function TaskMgrService(taskFactory, $log) {
    var vm = this;

    vm.loadTasks = function (taskVO) {
      if (!taskVO) {
        $log.error("taskVO is undefined");
        return;
      }
      var desc = "Mauris aliquam odio vel ligula congue volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae augue in nisi suscipit ultrices eget non magna. Nunc sollicitudin urna id ligula dictum, sit amet convallis massa pulvinar. Etiam sit amet eros id ligula vestibulum sollicitudin eget in arcu. Vestibulum nulla dui, vehicula ut felis vehicula, feugiat lacinia ex. Cras porta nisi sed neque iaculis scelerisque molestie ut nibh. Sed id dictum lacus.";
      if (taskVO.allTasks && taskVO.allTasks.length > 0) {
        var lastIndex = taskVO.allTasks.length;
        if (lastIndex < 0) lastIndex = 0;

        for (var j = 1; j < 10; j++) {
          var index = lastIndex + j;
          taskVO.allTasks.push(taskFactory.createTask(index, index, 'Task ' + index, desc, new Date(), new Date(), 'Shreyas', 'Completed'));
        }
      } else {
        taskVO.allTasks = [];
        for (var i = 1; i <= 10; i++) {
          taskVO.allTasks.push(taskFactory.createTask(i, i, 'Task ' + i, desc, new Date(), new Date(), 'Abhay', 'NEW'));
        }
      }
    };

    var taskVO =  {
      headers : taskFactory.getHeaders(),
      statuses : taskFactory.getStatuses(),
      assignees : taskFactory.getAssignees(),
      allTasks : [],
      task : taskFactory.createEmptyTask()
    };

    vm.getTaskVO = function () {
      return taskVO;
    };

    vm.deleteTask = function (task, taskVO) {
      $log.debug("deleting task: " + JSON.stringify(task));
      taskVO.allTasks.forEach(function (t, index, allTasks) {
        if (task.id == t.id) {
          allTasks.splice(index, 1);
        }
      });
    };

    vm.createNewTask = function (taskVO) {
      taskVO.task = taskFactory.createNewTask();
    }

  }
})();
