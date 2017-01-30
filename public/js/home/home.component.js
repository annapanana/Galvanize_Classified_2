'use strict';
(function() {
  angular.module('app')
    .component('home', {
      templateUrl: 'js/home/home.template.html',
      controller: controller
    });

    function controller() {
      console.log("controller loaded for home");
      const vm = this;
      vm.$onInit = function() {

      }
    }
}());
