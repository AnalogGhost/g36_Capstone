'use strict';

(() => {
  angular.module('app')
    .component('dashboard', {
      controller: controller,
      templateUrl: '/js/dashboard/dashboard.template.html'
    });

  controller.inject = ['http']

  function controller($http) {
    const vm = this
  }
})();
