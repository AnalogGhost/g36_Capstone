'use strict';

(function(){
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'landingPage',
        // url: '/landingPage',
        url: '/',
        component: 'landingPage'
      })
      .state({
        name: 'dashboard',
        // url: '/',
        url: '/dashboard',
        component: 'dashboard',
        resolve: {
          isLoggedIn: function($http) {
            return $http({method: 'GET', url: '/users/loggedIn'});
          }
        }
      })
  }

})();
