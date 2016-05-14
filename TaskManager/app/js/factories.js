(function () {
  "use strict";
  angular
    .module('TaskManagerApp')
    .factory('taskFactory', taskFactory);

  function taskFactory() {
    angular.extend(this, {
      createEmptyTask: function () {
        return {
          id: undefined,
          srno: undefined,
          name: undefined,
          desc: undefined,
          stdt: undefined,
          enddt: undefined,
          assignee: undefined,
          status: undefined
        }
      },
      createTask: function (id, srno, name, desc, stDt, endDt, assignee, status) {
        var task = this.createEmptyTask();
        task.id = id;
        task.name = name;
        task.desc = desc;
        task.srno = srno;
        task.stdt = stDt;
        task.enddt = endDt;
        task.assignee = assignee;
        task.status = status;

        return task;
      },

      getHeaders: function () {
        return ['Sr#', 'Name', 'Description', 'Start date', 'End date', 'Assignee','Status', 'Actions'];
      },

      getStatuses: function () {
        return ['New', 'Completed', 'Need more info', 'Pending', 'Work in Progress', 'Canceled'];
      },

      getAssignees: function () {
        return ['Shreyas', 'Avinash', 'Mayur', 'Kalyani', 'Paridhi', 'Yamshee', 'Neeraja', 'Sushma', 'Priyanka', 'Monika', 'Abhay'];
      }
    });

    return this;
  }
})();
