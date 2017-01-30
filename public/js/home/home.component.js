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
      vm.isPosting = true;
      vm.newPost = {};
      vm.$onInit = function() {
        // Pull all adds
        $http.get('/classifieds').then((result) => {
          // console.log(result.data);
          vm.posts = result.data;
        });
      };

      vm.addPost = function() {
        // console.log("addPost", vm.newPost);
        $http.post('/classifieds', vm.newPost).then((result) => {
          console.log(result);
        });
      };
    }
}());
