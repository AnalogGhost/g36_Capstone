(function() {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);

    $stateProvider
    .state({
      name: 'students',
      url: '/',
      component: 'students'
    })
    .state({
      name: 'staff',
      url: '/staff',
      component: 'staff'
    })
    .state({
      name: 'curriculum',
      url: '/curriculum',
      component: 'curriculum'
    })

    $urlRouterProvider.otherwise("/");
  }
}());
