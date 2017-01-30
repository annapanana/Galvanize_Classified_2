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
      vm.selectedPost = $stateParams.selectedPost;
      vm.$onInit = function() {
      };

      vm.editPost = function() {
        console.log(vm.selectedPost.id);
        $http.patch(`/classifieds/${vm.selectedPost.id}`, vm.selectedPost).then((result) => {
          console.log(result);
          $state.go("home");
        })
      };
    }
}());
