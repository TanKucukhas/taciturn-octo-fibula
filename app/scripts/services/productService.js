'use strict';
var productServices = angular.module('productServices', ['ngResource']);

productServices.factory('Product', ['$resource',
  function($resource){
    return $resource('data/products/:productId.json', {}, {
      query: {method:'GET', params:{productId:'lastVisited'}, isArray:true}
    });
  }]);


productServices.factory('userFactory', function($resource){

      console.log("factory is called");
    
    var userData = $resource('data/userData.json', {}, {
      getUserData: {method:'GET'}
    }); 


 
    return userData;


});




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
