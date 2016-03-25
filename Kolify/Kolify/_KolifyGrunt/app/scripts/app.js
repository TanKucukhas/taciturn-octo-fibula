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
        // 'ngRoute',
        'ui.router',
        'ngSanitize',
        'ui.bootstrap',
        'productControllers',
        'ngTouch',
        'productFilters',
        // 'characterFilters',
        'productDetailAnimations',
        'productServices',
        'categoryServices',
        'ngCart',
        'ncy-angular-breadcrumb'
    ])

.config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      prefixStateName: 'home',
      template: 'bootstrap2'
    });
  })
.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main',
            ncyBreadcrumb: {
                label: 'Ana Sayfa '
            }
        })
        .state('category', {
            url: '/kategori/:categoryId',
            templateUrl: function(urlattr) {
                return '/views/' + urlattr.categoryId + '.html';
            },
            controller: 'categoryCtrl',
            ncyBreadcrumb: {
                label: 'Kategori'
            }
        })
        .state('dukkan', {
            url: '/dukkan/:productId',
            templateUrl: 'views/product.html',
            controller: 'ProductDetailCtrl',
            ncyBreadcrumb: {
                label: 'Home page'
            }
        })

    .state('sepet', {
            url: '/sepet',
            templateUrl: 'views/cart.html',

        }

    )


    // .state('kategori/:categoryId*', {
    // templateUrl: function(urlattr) {
    //     return '/views/' + urlattr.categoryId + '.html';
    // },
    //     controller: 'categoryCtrl',

    // })
    // .state('/dukkan/:productId', {
    //     templateUrl: 'views/product.html',
    //     controller: 'ProductDetailCtrl'
    // })
    // .state('state2.list', {
    //   url: "/list",
    //   templateUrl: "partials/state2.list.html",
    //   controller: function($scope) {
    //     $scope.things = ["A", "Set", "Of", "Things"];
    //   }
    // })
    ;
});


// .config(function($routeProvider) {
//     $routeProvider
//         .when('/', {
//             templateUrl: 'views/main.html',
//             controller: 'MainCtrl',
//             controllerAs: 'main'
//         })
//         .when('/kategori/:categoryId*', {
//             templateUrl: function(urlattr) {
//                 return '/views/' + urlattr.categoryId + '.html';
//             },
//             controller: 'categoryCtrl',

//         })
//         .when('/dukkan/:productId', {
//             templateUrl: 'views/product.html',
//             controller: 'ProductDetailCtrl'
//         })

//     .when('/sepet', {
//         templateUrl: 'views/cart.html',

//     })


//     .when('/about', {
//             templateUrl: 'views/about.html',
//             controller: 'AboutCtrl',
//             controllerAs: 'about'
//         })
//         .otherwise({
//             redirectTo: '/'
//         });
// });


// angular.module('kolifyApp', [])
