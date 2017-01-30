'use strict';
(function() {
  angular.module('app')
    .component('home', {
      templateUrl: 'js/home/home.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"]
    function controller($http, $state, $stateParams) {
      const vm = this;
      vm.newPost = {};
      vm.$onInit = function() {
        // Pull all adds
        refreshPosts();
      };

      vm.addPost = function() {
        $http.post('/classifieds', vm.newPost).then((result) => {
          console.log(result);
          refreshPosts();
        });
      };

      vm.deletePost = function(id) {
        $http.delete(`/classifieds/${id}`).then((result) => {
          console.log(result);
          refreshPosts();
        });
      };

      vm.newPost = function() {
        $state.go("newPost");
      };

      function refreshPosts() {
        $http.get('/classifieds').then((result) => {
          // console.log(result.data);
          vm.posts = result.data;
        });
      }
    }

}());
