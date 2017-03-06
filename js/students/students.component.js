(function() {
  'use strict';

  angular.module('app')
    .component('students', {
      controller: studentsController,
      templateUrl: 'js/students/students.template.html'
    });


    studentsController.$inject = ['$http']

    function studentsController($http) {
      const vm = this;

      vm.$onInit = function() {
        $http.get('/js/students/students.json').then(function (response) {
          vm.students = response.data.students;
        });      }
        vm.searchInput = '';


    }
}());
