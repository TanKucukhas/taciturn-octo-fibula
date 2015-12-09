'use strict';

/**
 * @ngdoc overview
 * @name kolifyApp
 * @description
 * # kolifyApp
 *
 * Main module of the application.
 */
angular
  .module('kolifyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/category', {
        templateUrl: 'views/category.html',
        controller: 'categoryCtrl',
        controllerAs: 'category'
      })
        .when('/dukkan/:productId', {
        templateUrl: 'views/product.html',
        controller: 'ProductDetailCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


