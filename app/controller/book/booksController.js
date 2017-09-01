(function () {

    let booksController = function ($scope) {
        this.title = "Just a sample app";

        $scope.books = [];

        $scope.fetchBooks = function () {
            $scope.books = [
                { ID: 1, BookName: "Test Books 1", AuthorName: "Test Author 1", ISBN: "TEST1" },
                { ID: 2, BookName: "Test Books 2", AuthorName: "Test Author 2", ISBN: "TEST2" },
                { ID: 3, BookName: "Test Books 3", AuthorName: "Test Author 3", ISBN: "TEST3" },
                { ID: 4, BookName: "Test Books 4", AuthorName: "Test Author 4", ISBN: "TEST4" },
                { ID: 5, BookName: "Test Books 5", AuthorName: "Test Author 5", ISBN: "TEST5" }
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
    }
    angular.module('myAngularApplication')
        .controller('booksController', ['$scope', booksController]);
}())