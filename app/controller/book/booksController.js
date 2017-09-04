(function () {

    let booksController = function ($scope) {
        this.title = "Books";

        $scope.books = [];
        $scope.amountBooksVisible = 5;
        $scope.limitRowsPerPage = 5;

        $scope.fetchBooks = function () {
            $scope.books = [
                { ID: 1, BookName: "Test Books 1", AuthorName: "Test Author 1", ISBN: "TEST1", DateReleased:1288323623006 },
                { ID: 2, BookName: "Test Books 2", AuthorName: "Test Author 2", ISBN: "TEST2", DateReleased:1288323623006 },
                { ID: 3, BookName: "Test Books 3", AuthorName: "Test Author 3", ISBN: "TEST3", DateReleased:1288323623006 },
                { ID: 4, BookName: "Test Books 4", AuthorName: "Test Author 4", ISBN: "TEST4", DateReleased:1288323623006 },
                { ID: 5, BookName: "Test Books 5", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased:1288323623006 },
                { ID: 6, BookName: "Test Books 6", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased:1288323623006 },
                { ID: 7, BookName: "Test Books 7", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased:1288323623006 },
                { ID: 8, BookName: "Test Books 8", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased:1288323623006 },
                { ID: 9, BookName: "Test Books 9", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased:1288323623006 },
                { ID: 10, BookName: "Test Books 10", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased:1288323623006 },
                { ID: 11, BookName: "Test Books 11", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased:1288323623006 },
                { ID: 12, BookName: "Test Books 12", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased:1288323623006 },
                { ID: 13, BookName: "Test Books 13", AuthorName: "Test Author 5", ISBN: "TEST5", DateReleased:1288323623006 }                
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