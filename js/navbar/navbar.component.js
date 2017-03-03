(function() {
  'use strict';

  angular.module('app')
    .component('navbar', {
      controller: navbarController,
      templateUrl: 'js/navbar/navbar.template.html'
    });


    function navbarController() {
      const vm = this;

      vm.$onInit = function() {
        vm.currentNavItem = 'students';
      }

    }
}());
