'use strict';

(function(){
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'landingPage',
        url: '/',
        // url: '/landing',
        component: 'landingPage'
      })
      .state({
        name: 'dashboard',
        url: '/dashboard',
        // url: '/',
        component: 'dashboard'
      })
  }

})();
