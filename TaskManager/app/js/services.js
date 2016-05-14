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

      var lastIndex = 0;
      if (taskVO.allTasks && taskVO.allTasks.length > 0) {
        lastIndex = taskVO.allTasks.length;
        if (lastIndex < 0) lastIndex = 0;
      } else {
        taskVO.allTasks = [];
      }

      for (var j = 1; j < 10; j++) {
        var index = lastIndex + j;
        taskVO.allTasks.push(
          taskFactory.createTask(index, index, 'Task ' + index,
            taskFactory.getRandomDesc(), new Date(), new Date(),
            taskFactory.getRandomAssignee(),
            taskFactory.getRandomStatus())
        );
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

    vm.saveTask = function (task, allTasks) {
      allTasks.push(task);
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
