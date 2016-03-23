'use strict';
var productServices = angular.module('productServices', ['ngResource']);

productServices.factory('Product', ['$resource',
  function($resource){
    return $resource('data/products/:productId.json', {}, {
      query: {method:'GET', params:{productId:'lastVisited'}, isArray:true}
    });
  }]);


productServices.factory('userFactory', function($resource){

    var userData = $resource('data/userData.json', {}, {
      getUserData: {method:'GET'},
     
    });



    
    // userData = $resource('data/userData.json', {}, {
    //   setUserData: {method:'POST'}
    // });
    return userData;


// var controller_data = {"text":"hello","id":"5"};
// $http({url: 'http://localhost:8383/HTML5Application1/' , method: "POST",withCredentials: true,data:controller_data});
  








});



  // $scope.save = function() {
  //     $scope.user = userFactory.setUserData();
  // };


// ngular.module('services', []).factory('factoryName', ["$filter",
//   function($filter) {
//     var method1Logic = function(args) {
//       //code
//     };
//     var method2Logic = function(args) {
//      //code
//     };
//     return {
//       method1: method1Logic,
//       method2: method1Logic
//     };
//   }
// ]).controller('MainController', ["$scope", "$rootScope", "$filter", "factoryName", function ($scope, $rootScope, $filter,factoryName) {
//      $scope.testMethod1 = function(arg){
//        $scope.val1 = factoryName.method1(arg);
//      };

//      $scope.testMethod2 = function(arg){
//        $scope.val2 = factoryName.method2(arg);
//      };
// }]);




// productServices.factory('testFactory', function($resource){

//     return $resource('data/userData.json');


// });



// productServices.factory('testFactory', function(){
//     return {
//         sayHello: function(text){
//             return "Factory says \"Hello " + text + "\"";
//         },
//         sayGoodbye: function(text){
//             return "Factory says \"Goodbye " + text + "\"";
//         }  
//     }               
// });
