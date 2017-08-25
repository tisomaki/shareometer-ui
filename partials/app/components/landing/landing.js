
angular.module("landing", []).controller("landingController", ["$scope","$location", function ($scope, $location) {
    $scope.initJourney = function () {
        $location.path("/journey");
    };
}]);
