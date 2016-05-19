(function () {
  "use strict";
  angular
    .module('TaskManagerApp')
    .factory('TaskVO', TaskFactory);

  TaskFactory.$inject = ['$log', '$firebaseArray'];

  function TaskFactory($log, $firebaseArray) {
    var dbRef = new Firebase('https://luminous-fire-4517.firebaseio.com/taskMgrData');

    var Task = function () {
      this.srno = undefined;
      this.title = undefined;
      this.desc = undefined;
      this.stdt = undefined;
      this.expStDt = undefined;
      this.enddt = undefined;
      this.expEndDt = undefined;
      this.assignee = undefined;
      this.status = undefined;
    };

    var TaskVO = function () {
      this.assignees = {
        'Shreyas': 1,
        'Avinash': 2,
        'Mayur': 3,
        'Kalyani': 4,
        'Paridhi': 5,
        'Yamshee': 6,
        'Neeraja': 7,
        'Sushma': 8,
        'Priyanka': 9,
        'Monika': 10,
        'Abhay': 11
      };
      this.statuses = {
        'New': 1,
        'Completed': 2,
        'Need more info': 3,
        'Pending': 4,
        'Work in Progress': 5,
        'Canceled': 6
      };
      this.headers = ['Sr#', 'Name', 'Description', 'Start date', 'End date', 'Assignee', 'Status', 'Actions'];
      this.task = new Task();
      this.allTasks = [];
      this.busy = true;
    };

    TaskVO.prototype.quickSave = function (task) {
      task.status = 'New';
      task.desc = 'TBD';
      task.expStDt = 'TBD';
      task.expEndDt = 'TBD';
      task.srno = this.allTasks.length + 1;
      this.saveTask(task);
    };

    TaskVO.prototype.saveTask = function (task) {

    };

    TaskVO.prototype.deleteTask = function (task) {

    };

    TaskVO.prototype.newTask = function (taskVO) {
      return taskVO.task = new Task();
    };

    TaskVO.prototype.loadTasks = function () {
      this.allTasks = $firebaseArray(dbRef);
    };

    return TaskVO;
  }
})();
