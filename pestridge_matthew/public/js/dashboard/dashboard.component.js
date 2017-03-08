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
    vm.$onInit = onInit
    vm.planPost = planPost
    vm.planList = []

    function planPost() {
      $http.post('/users/plan', {
        description: vm.planForm.description,
        lifecategory: vm.planForm.lifecategory,
        swotcategory: vm.planForm.swotcategory,
        impact: vm.planForm.impact
      })
      $http.get('/plans').then((response) => {
        vm.planList = response.data
      })
    }

  function onInit() {
    $http.get('/plans').then((response) => {
      vm.planList = response.data
    })
  }

  // function goalPost() {
  //
  // }

  }
})();
