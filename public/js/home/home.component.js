'use strict';
(function() {
  angular.module('app')
    .component('home', {
      templateUrl: 'js/home/home.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state"]
    function controller($http, $state) {
      const vm = this;
      vm.isPosting = false;
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

      vm.toggleForm = function() {
        if (vm.isPosting) {
          vm.isPosting = false;
        } else {
          vm.isPosting = true;
        }
      };

      function refreshPosts() {
        $http.get('/classifieds').then((result) => {
          // console.log(result.data);
          vm.posts = result.data;
        });
      }
    }

}());
