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
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: '//placekitten.com/' + newWidth + '/300',
            text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
});


angular.module('kolifyApp').controller('LastVisitedCtrl', function($scope, $http) {
    $http.get('data/lastVisited.json').success(function(data) {
        $scope.lastVisiteds = data;
        $scope.filteredlastVisiteds = [], $scope.currentPage = 1, $scope.pageSize = 6, $scope.maxSize = 4;

        $scope.$watch('currentPage + pageSize', function() {
            var begin = (($scope.currentPage - 1) * $scope.pageSize),
                end = begin + $scope.pageSize;

            $scope.filteredlastVisiteds = $scope.lastVisiteds.slice(begin, end);
        });

    });

});


angular.module('kolifyApp').controller('brandCarouselCtrl', function($scope, $http) {
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



angular.module('kolifyApp').controller('userBoxCtrl', function($scope, $http) {
    $scope.cartItems = 5;

     $http.get('data/userData.json').success(function(data) {

    $scope.user = data;

    });


});


angular.module('kolifyApp').controller('ProductDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/products/' + $routeParams.productId + '.json').success(function(data) {
      $scope.product = data;
    });
  }]);



