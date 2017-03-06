'use strict';

(() => {
  angular.module('app')
    .component('landingPage', {
      controller: controller,
      templateUrl: '/js/landing/landing.template.html'
    });

  controller.inject = ['http', '$state']

  function controller($http, $state) {
    const vm = this
    vm.register = register
    vm.login = login

  function register() {
    $http.post('/users/register', {
      name: vm.registerUser.name,
      email: vm.registerUser.email,
      password: vm.registerUser.password
    }).then((response) => {
      // console.log('Post: ', response.data)
    }, (err) => {
      console.log(err);
    })
  }

  function login() {
    $http.post('/users/login', {
      email: vm.loginUser.email,
      password: vm.loginUser.password
    }).then((response) => {
      // console.log(response.data)
    }), (err) => {
      console.log(err)
    }
    // console.log(vm.loginUser.email, vm.loginUser.password)
  }

  }
})();
