(function() {
  'use strict';

  angular.module('app')
    .component('students', {
      controller: studentsController,
      templateUrl: 'js/students/students.template.html'
    });


    function studentsController() {
      const vm = this;

      vm.$onInit = function() {
        console.log('Students Init');
      }


    }
}());
