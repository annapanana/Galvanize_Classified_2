'use strict';
(function() {
  angular.module('app')
    .component('app', {
      templateUrl: 'js/app/app.template.html',
      controller: controller
    });

    function controller() {
      console.log("controller loaded for app");
    }
}());
