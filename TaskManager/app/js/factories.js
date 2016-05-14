(function () {
  "use strict";
  angular
    .module('TaskManagerApp')
    .factory('taskFactory', taskFactory);

  function taskFactory() {
    var assignees = ['Shreyas', 'Avinash', 'Mayur', 'Kalyani', 'Paridhi', 'Yamshee', 'Neeraja', 'Sushma', 'Priyanka', 'Monika', 'Abhay'];
    var statuses = ['New', 'Completed', 'Need more info', 'Pending', 'Work in Progress', 'Canceled'];
    var headers = ['Sr#', 'Name', 'Description', 'Start date', 'End date', 'Assignee','Status', 'Actions'];
    var descriptions = [
      "Nulla rutrum feugiat purus, tempor semper nisi dapibus et. Nam blandit, lacus nec rhoncus rutrum, justo felis bibendum lacus, eget commodo tortor erat sit amet eros. Pellentesque luctus tempus nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sit amet lorem ut augue lobortis sollicitudin nec et elit. Integer nec turpis nisi. Donec ullamcorper, nunc id maximus molestie, dui enim rhoncus justo, quis eleifend neque nulla ac metus. Vestibulum dignissim sed leo nec tincidunt. Nullam rhoncus turpis eu eros aliquet, at malesuada ex pretium.",
      "Maecenas auctor fringilla nunc, nec laoreet est sodales blandit. Aenean imperdiet justo vitae elit vestibulum feugiat. Curabitur consequat mauris lorem, at accumsan lacus elementum id. Integer faucibus enim et neque pretium imperdiet. Donec vulputate, elit vitae blandit rhoncus, odio tortor dictum erat, sed tempus leo risus in eros. Nunc condimentum mi ac justo venenatis, a pretium neque convallis. Phasellus auctor, ligula nec faucibus dapibus, turpis ante faucibus tortor, ac dictum felis orci vitae nulla.",
      "Aliquam ultricies vel velit non venenatis. Maecenas purus sem, porttitor id purus at, suscipit lacinia neque. Praesent in nulla et risus malesuada finibus eget at ante. Phasellus hendrerit hendrerit maximus. Nunc ornare massa vitae auctor eleifend. Aenean sit amet porta eros, at ultrices enim. Phasellus tincidunt, felis ut imperdiet congue, lacus massa dapibus ligula, ac pretium felis dolor eget erat. Maecenas eleifend enim fermentum tortor fermentum bibendum. Integer in libero in sapien dignissim bibendum. Ut gravida massa vel enim suscipit efficitur. Fusce efficitur nisl vel tellus maximus, in semper ex scelerisque. Duis id leo eget ante venenatis accumsan in nec diam. Proin ex risus, mattis dictum laoreet ac, maximus non est. Nunc sed consectetur quam. Suspendisse ex ligula, congue a nisl et, tempus gravida magna.",
      "Aliquam commodo facilisis euismod. Phasellus a tempor nisi. Maecenas sit amet dapibus magna. Curabitur in elit ex. Morbi venenatis tempor ligula eu pulvinar. Pellentesque nec libero purus. Vivamus gravida tellus odio, id hendrerit nulla euismod non. Phasellus pretium sem at velit faucibus iaculis.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum velit a elit euismod, in hendrerit urna ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer hendrerit metus ut orci lobortis pharetra. Vivamus turpis lorem, ultrices id eros ut, scelerisque semper sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla condimentum mauris diam, at rhoncus dolor faucibus nec. Maecenas est felis, finibus non viverra id, tempus eget sem. Proin sagittis, enim a fermentum interdum, nulla ex auctor mauris, eget venenatis nunc neque ac mi. Morbi eu nibh orci. Vestibulum vestibulum ante in ante convallis condimentum. Donec nibh sapien, lacinia nec erat sollicitudin, tristique euismod tortor. Curabitur sit amet porta felis."
    ];

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
        return headers;
      },

      getStatuses: function () {
        return statuses;
      },

      getAssignees: function () {
        return assignees;
      },

      getRandomDesc: function () {
        return descriptions[Math.floor(Math.random() * descriptions.length)];
      },

      getRandomStatus: function () {
        return statuses[Math.floor(Math.random() * statuses.length)];
      },

      getRandomAssignee: function () {
        return assignees[Math.floor(Math.random() * assignees.length)];
      }
    });

    return this;
  }
})();
