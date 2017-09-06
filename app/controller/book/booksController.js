(function () {

    let booksController = function ($scope, localBooksService) {
        this.title = "Books";

        $scope.books = [];
        $scope.book = {};
        $scope.editBook = null;
        $scope.currentIndex = 0;
        $scope.limitRowsPerPage = 5;
        $scope.fields = ['ID', 'BookName', 'AuthorName', 'DateReleased'];
        $scope.orderField = $scope.fields[0];
        $scope.isDescending = false;

        $scope.fetchBooks = function () {
            $scope.books = localBooksService.books;
        }

        $scope.addBook = function () {
            localBooksService.addBook($scope.book);
            $scope.fetchBooks();
            $scope.book = {}
        }

        $scope.updateBook = function () {
            localBooksService.updateBook($scope.editBook);
            $scope.editBook = null;
            $scope.fetchBooks();
        }

        $scope.setEditBook = function (selected) {                        
            $scope.editBook = angular.copy(selected);
            $scope.book = {}
        }

        $scope.cancelEdit = function () {
            $scope.editBook = null;
            $scope.book = {}
        }

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

        $scope.fetchBooks();
    }
    angular.module('myAngularApplication')
        .controller('booksController', ['$scope', 'localBooksService', booksController]);

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