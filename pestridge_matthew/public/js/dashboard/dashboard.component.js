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
    vm.goalPost = goalPost
    vm.planList = []
    vm.goalList = []

    function planPost() {
      $http.post('/plans', {
        description: vm.planForm.description,
        lifecategory: vm.planForm.lifecategory,
        swotcategory: vm.planForm.swotcategory,
        impact: vm.planForm.impact
      })
      $http.get('/plans').then((response) => {
        vm.planList = response.data
      })
    }

    function goalPost() {
      $http.post('/goals', {
        shortdescription: vm.goalForm.shortdescription,
        longdescription: vm.goalForm.longdescription,
        duedate: vm.goalForm.duedate
      }).then((response) => {
        console.log(response.data);
      })
      $http.get('/goals').then((response) => {
        console.log(response.data);
        vm.goalList = response.data
      })
      console.log(vm.goalForm.shortdescription);
      console.log(vm.goalForm.longdescription);
      console.log(vm.goalForm.duedate);
    }

  function onInit() {
    $http.get('/plans').then((response) => {
      vm.planList = response.data
    })
    $http.get('/goals').then((response) => {
      vm.goalList = response.data
    })
  }

  }
})();
