module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
      },
      build: {
        src: 'app/js/*.js',
        dest: 'app/build/<%= pkg.name %>.min.js'
      }
    },

  //   concat: {
  //     options: {
  //       separator: ';',
  //       banner: '/*! <%= pkg.name %> -v <%= pkg.version%> - <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
  //     },
  //     dist: {
  //       src: [
  //         'app/bower_components/angular/angular.min.js'
  //         ,'app/bower_components/angular-animate/angular-animate.min.js'
  //         ,'app/bower_components/angular-route/angular-route.min.js'
  //         ,'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
  //         ,'app/bower_components/AngularJS-Toaster/toaster.min.js'
  //         ,'app/bower_components/angular-messages/angular-messages.min.js'
  //         ,'app/bower_components/firebase/firebase.js'
  //         ,'app/bower_components/firebase/angularfire/dist/angularfire.min.js'
  //         ,'build/taskmanager.min.js'
  //       ],
  //       dest: 'app/dist/app.js'
  //     }
  //   }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['uglify']);

};