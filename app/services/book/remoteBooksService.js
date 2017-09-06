(function () {

    const remoteBooksService = function ($http) {

        const _fetchBooks = function () {
            return $http.get('http://localhost:57386/api/books');
        }
        return {
            fetchBooks: _fetchBooks
        };
    };

    angular.module("myAngularApplication").factory("remoteBooksService",
        ['$http', remoteBooksService]);
})()