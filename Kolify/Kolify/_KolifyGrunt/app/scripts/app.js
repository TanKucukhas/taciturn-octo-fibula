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
    'productControllers',
    'ngTouch',
    'productFilters',
    'productDetailAnimations',
    'productServices',
    'categoryServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/kategori/:categoryId', {
        templateUrl: 'views/category.html',
        controller: 'categoryCtrl',

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

