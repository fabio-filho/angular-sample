(function () {

    let booksController = function ($scope, $filter, localBooksService, remoteBooksService, $http) {
        this.title = "Books";

        $scope.books = [];
        $scope.currentIndex = 0;
        $scope.limitRowsPerPage = 5;
        $scope.fields = ['ID', 'BookName', 'AuthorName', 'DateReleased'];
        $scope.orderField = $scope.fields[0];
        $scope.isDescending = false;

        $scope.fetchBooks = function () {            
            $scope.books = localBooksService.books;
        }

        $scope.fetchBooksFromServer = function () {             
            remoteBooksService.fetchBooks()
                .success(function (data, status, headers, config) {
                    $scope.books = data;                    
                    $scope.error = "Not found any error!";
                })
                .error(function (data, status, headers, config) {
                    $scope.error = "Failed to retrieved items from server";
                });
        }

        $scope.country = null;

        $scope.countries = [
            "India",
            "Denmark",
            "USA",
            "Singapore",
            "Germany"
        ];

        $scope.getStyle = function (index) {
            if (index == 1)
                return { 'color': 'red' };
            if (index == 2)
                return { 'color': 'blue' };
            if (index == 3)
                return { 'color': 'green' };
        }

        $scope.nextPage = function () {
            $scope.currentIndex += $scope.limitRowsPerPage;
        }

        $scope.previousPage = function () {
            $scope.currentIndex -= $scope.limitRowsPerPage;
        }

        $scope.isLimitOfPage = function () {
            return ($scope.currentIndex + $scope.limitRowsPerPage) / $scope.limitRowsPerPage
                == Math.ceil($scope.books.length / $scope.limitRowsPerPage);
        }
    }
    angular.module('myAngularApplication')
        .controller('booksController', ['$scope', '$filter', 'localBooksService', 'remoteBooksService', booksController]);

    angular.module('myAngularApplication').filter('power', function () {

        return function (input, powerValue) {

            // Check if power value is falsy
            if (!powerValue) {
                powerValue = 1;
            }

            // Use Math.pow to find the power and return it
            return Math.pow(input, powerValue);
        }
    });
}())