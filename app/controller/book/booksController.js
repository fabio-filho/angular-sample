(function () {

    let booksController = function ($scope) {
        this.title = "Books";

        $scope.books = [];
        $scope.currentIndex = 0;
        $scope.limitRowsPerPage = 5;
        $scope.fields = ['ID', 'BookName', 'AuthorName', 'DateReleased'];
        $scope.orderField = $scope.fields[0];
        $scope.isDescending = false;

        $scope.fetchBooks = function () {
            $scope.books = [
                { ID: 1, BookName: "Test Books 1", AuthorName: "Test Author 1", ISBN: "TEST1", DateReleased: 786585600000 },
                { ID: 5, BookName: "Test Books 5", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased: 983923200000 },
                { ID: 3, BookName: "Test Books 3", AuthorName: "Test Author 3", ISBN: "TEST3", DateReleased: -1720051200000 },
                { ID: 2, BookName: "Test Books 2", AuthorName: "Test Author 2", ISBN: "TEST2", DateReleased: 1288323623006 },
                { ID: 4, BookName: "Test Books 4", AuthorName: "Test Author 4", ISBN: "TEST4", DateReleased: 1288323723006 },
                { ID: 6, BookName: "Test Books 6", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased: 947116800000 },
                { ID: 13, BookName: "Test Books 13", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased: 1288313623006 },
                { ID: 7, BookName: "Test Books 7", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased: 1288323623006 },
                { ID: 8, BookName: "Test Books 8", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased: -454204800000 },
                { ID: 9, BookName: "Test Books 9", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased: 1288323623006 },
                { ID: 11, BookName: "Test Books 11", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased: 1228323623006 },
                { ID: 10, BookName: "Test Books 10", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased: 1288313121006 },
                { ID: 12, BookName: "Test Books 12", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased: 1118323623006 }
            ];
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
        .controller('booksController', ['$scope', booksController]);

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