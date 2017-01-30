'use strict';
(function() {

  angular.module('app')
    .config(config)

    config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $stateProvider
        .state({
          name: "app",
          abstract: true,
          component: "app"
        })
        .state({
          name: "home",
          parent: "app",
          url: "/",
          component: "home"
        })
        .state({
          name: "newPost",
          parent: "app",
          url: "/new-post",
          component: "newPost"
        })
        .state({
          name: "editPost",
          parent: "app",
          url: "/new-post",
          component: "editPost",
          params: {
            post_id: 0
          }
        });
    }
}());
