(function () {
  "use strict";
  angular
    .module('TaskManagerApp')
    .service('TaskMgrService', TaskMgrService);

  TaskMgrService.$inject = ['taskFactory', '$log', '$firebaseObject'];

  function TaskMgrService(taskFactory, $log, $firebaseObject) {
    var dbRef = new Firebase('https://luminous-fire-4517.firebaseio.com/taskMgrData');
    var localDb = $firebaseObject(dbRef);
    var taskVO = {
      headers: taskFactory.getHeaders(),
      statuses: taskFactory.getStatuses(),
      assignees: taskFactory.getAssignees(),
      allTasks: [],
      task: taskFactory.createEmptyTask()
    };
    this.getTaskVO = function () {
      return taskVO;
    };
  }


  TaskMgrService.prototype.loadTasks = function (taskVO) {
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

    // for (var j = 1; j < 10; j++) {
    //   var index = lastIndex + j;
    //   taskVO.allTasks.push(
    //     taskFactory.createTask(index, index, 'Task ' + index,
    //       taskFactory.getRandomDesc(), new Date(), new Date(),
    //       taskFactory.getRandomAssignee(),
    //       taskFactory.getRandomStatus())
    //   );
    // }
  };

  TaskMgrService.prototype.saveTask = function (task, allTasks) {
    allTasks.push(task);
  };

  TaskMgrService.prototype.deleteTask = function (task, taskVO) {
    $log.debug("deleting task: " + JSON.stringify(task));
    taskVO.allTasks.forEach(function (t, index, allTasks) {
      if (task.id == t.id) {
        allTasks.splice(index, 1);
      }
    });
  };

  TaskMgrService.prototype.createNewTask = function (taskVO) {
    taskVO.task = taskFactory.createNewTask();
  }
})();
