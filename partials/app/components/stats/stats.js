angular.module('stats', []).controller('statsController', function ($scope, $http, $location,$log) {
    $scope.$log = $log;
    
    $http.get("/journeys?_sort=start&_order=desc")
        .then(function (response) {
            $scope.journey = { items: response.data };
        });
});