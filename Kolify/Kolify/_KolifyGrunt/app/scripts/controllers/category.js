'use strict';
/**
 * @ngdoc function
 * @name kolifyApp.controller:categoryCtrl
 * @description
 * # categoryCtrl
 * Controller of the kolifyApp
 */
angular.module('kolifyApp')
  .controller('categoryCtrl', ['$scope','$state','$stateParams', 'userFactory', 'listCategory', function($scope, $state, $stateParams, userFactory, listCategory) {


  //    $scope.test = 3000;


  // 	$scope.userData = userFactory.getUserData();
 
  // $scope.bok = listCategory.query();
  

  // $scope.category = listCategory.get({categoryId: 'category-' + $routeParams.categoryId}, function(listCategory) {});
  
  $scope.filters = {
  };

  $scope.priceFilter ={
  	 	minPrice: 0,
  	maxPrice: 9999
  };


  $scope.category = listCategory.query({categoryId: 'category-' + $stateParams.categoryId}); 



$scope.greaterThan = function(prop, val){
    return function(catitems){
      return catitems[prop] > val;
    };
};

$scope.lessThan = function(prop, val){
    return function(catitems){
      return catitems[prop] < val;
    };
};

  console.log($scope.category);


  }]);



