'use strict';
var categoryServices = angular.module('categoryServices', ['ngResource']);

categoryServices.factory('listCategory', ['$resource',
  function($resource){
    return $resource('data/:categoryId.json', {}, {
      query: {method:'GET', params:{categoryId:'dsfsdf'}, isArray:true}
    });


  }]);

// productServices.factory('Product', ['$resource',
//   function($resource){
//     return $resource('data/products/:productId.json', {}, {
//       query: {method:'GET', params:{productId:'lastVisited'}, isArray:true}
//     });
//   }]);


// productServices.factory('userFactory', function($resource){

//       console.log('factory is called');
    
//     var userData = $resource('data/userData.json', {}, {
//       getUserData: {method:'GET'}
//     }); 


 
//     return userData;


// });





// categoryServices.factory('listCategory', function($resource){

//       console.log('listing categories');


    
//     var categories = $resource('data/category_kids.json', {}, {
//       getCategories: {method:'GET'}
//     }); 


 
//     return categories;


// });

