'use strict';

(() => {
  angular.module('app')
    .component('landingPage', {
      controller: controller,
      templateUrl: '/js/landing/landing.template.html'
    });

  controller.inject = ['http']

  function controller($http) {
    const vm = this
    vm.register = register

  function register() {
    console.log('You clicked the register button');
  }

  

  function login() {

  }

  }
})();
