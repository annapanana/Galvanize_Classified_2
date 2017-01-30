"use strict";
(function() {
  angular.module('app')
    .component('editPost', {
      templateUrl: 'js/edit-post/edit-post.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"];
    function controller($http, $state, $stateParams) {
      const vm = this;

      //TODO on init, set vm.newPost vals according to state params
    }
}());
