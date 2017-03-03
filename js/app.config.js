(function() {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider','$mdThemingProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider,$mdThemingProvider) {


    $mdThemingProvider.theme('default')
      .primaryPalette('orange')
      .accentPalette('grey');
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
