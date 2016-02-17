'use strict';

/**
 * @ngdoc function
 * @name kolifyApp.controller:categoryCtrl
 * @description
 * # categoryCtrl
 * Controller of the kolifyApp
 */
angular.module('kolifyApp')
  .controller('categoryCtrl', ['$scope','$routeParams', 'userFactory', 'listCategory', function($scope, $routeParams, userFactory, listCategory) {


  //    $scope.test = 3000;


  // 	$scope.userData = userFactory.getUserData();
 
  // $scope.bok = listCategory.query();
  

  // $scope.category = listCategory.get({categoryId: 'category-' + $routeParams.categoryId}, function(listCategory) {});

  $scope.category = listCategory.query({categoryId: 'category-' + $routeParams.categoryId}); 

  console.log($scope.category)

  }]);



