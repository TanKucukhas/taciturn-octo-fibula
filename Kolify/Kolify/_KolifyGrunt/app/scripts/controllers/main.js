'use strict';
/* jshint expr: true */

/**
 * @ngdoc function
 * @name kolifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kolifyApp
 */
angular.module('kolifyApp')
    .controller('MainCtrl', function() {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

    });


angular.module('ui.bootstrap').controller('TabsDemoCtrl', function($scope, $window) {
    $scope.tabs = [{
        title: 'Dynamic Title 1',
        content: 'Dynamic content 1'
    }, {
        title: 'Dynamic Title 2',
        content: 'Dynamic content 2',
        disabled: true
    }];

    $scope.alertMe = function() {
        setTimeout(function() {
            $window.alert('You\'ve selected the alert tab!');
        });
    };
});



angular.module('ui.bootstrap').controller('CarouselDemoCtrl', function($scope) {
     $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: '../images/carousel-home/001-slide-still.png'
    },
    {
      image: '../images/carousel-home/002-slide-still.png'
    }
  ];
});






var productControllers = angular.module('productControllers', []);


productControllers.controller('LastVisitedCtrl', ['$scope', 'Product', 'userFactory', function($scope, Product, userFactory) {
  $scope.products = Product.query();
  
   $scope.filteredProducts = [], $scope.currentPage = 1, $scope.pageSize = 6, $scope.maxSize = 4;

        $scope.products.$promise.then(function () {
    $scope.totalItems = $scope.products.length;
    $scope.$watch('currentPage + pageSize', function() {
      var begin = (($scope.currentPage - 1) * $scope.pageSize),
        end = begin + $scope.pageSize;

      $scope.filteredProducts = $scope.products.slice(begin, end);
    });
  });


      $scope.userData = userFactory.getUserData();


  //  $scope.setPage = function (pageNo) {
  //   $scope.currentPage = pageNo;
  // };

}]);




productControllers.controller('ProductDetailCtrl', ['$scope', '$routeParams', 'Product', function($scope, $routeParams, Product) {
  $scope.product = Product.get({productId: $routeParams.productId}, function(product) {
  
    $scope.mainImageUrl = product.images[0];
  });

  $scope.setImage = function(imageUrl) {

    $scope.mainImageUrl = imageUrl;
    console.log($scope.mainImageUrl);

  };

  
}]);


// productControllers.controller('ProductDetailCtrl', ['$scope', '$routeParams', '$http',
//   function($scope, $routeParams, $http) {
//     $http.get('data/products/' + $routeParams.productId + '.json').success(function(data) {
//       $scope.product = data;
//       $scope.mainImageUrl = data.images[0];
//     });

//       $scope.setImage = function(imageUrl) {
//       $scope.mainImageUrl = imageUrl;
//     };
//   }]);







productControllers.controller('brandCarouselCtrl', function($scope, $http) {
    $http.get('data/brands.json').success(function(data) {
        $scope.brands = data;
        $scope.filteredBrands = [], $scope.currentPage = 1, $scope.pageSize = 9 , $scope.maxSize = 4;

        $scope.$watch('currentPage + pageSize', function() {
            var begin = (($scope.currentPage - 1) * $scope.pageSize),
                end = begin + $scope.pageSize;

            $scope.filteredBrands = $scope.brands.slice(begin, end);
        });

    });

});





// productControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
//   function($scope, $routeParams) {
//     $scope.phoneId = $routeParams.phoneId;
//   }]);




angular.module('kolifyApp').controller('userBoxCtrl', function($scope, $http, userFactory) {


    $scope.user = userFactory.getUserData();



  $scope.save = function() {
      $scope.user = userFactory.setUserData();
  };
// 

  // $scope.save = function() {
  //       $scope.user.cartItems += 1;
  // };

});






// function addToCart() {
//     var appElement = document.querySelector('[ng-app=kolifyApp]');
//     var $scope = angular.element(appElement).scope();
//     $scope.$apply(function() {
//         $scope.user.cartItems  = 1;
//     });
// }









