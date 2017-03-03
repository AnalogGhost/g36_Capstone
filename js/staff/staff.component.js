(function() {
  'use strict';

  angular.module('app')
    .component('staff', {
      controller: staffController,
      templateUrl: 'js/staff/staff.template.html'
    });


    function staffController() {
      const vm = this;

      vm.$onInit = function() {
      }


    }
}());
