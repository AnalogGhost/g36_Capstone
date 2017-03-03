(function() {
  'use strict';

  angular.module('app')
    .component('curriculum', {
      controller: curriculumController,
      templateUrl: 'js/curriculum/curriculum.template.html'
    });


    function curriculumController() {
      const vm = this;

      vm.$onInit = function() {
        console.log('curriculum Init');
      }


    }
}());
