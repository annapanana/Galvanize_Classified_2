"use strict";
(function() {
  angular.module('app')
    .component('newPost', {
      templateUrl: 'js/new-post/new-post.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"];
    function controller($http, $state, $stateParams) {

    }
}());
