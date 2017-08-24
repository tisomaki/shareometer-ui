angular.module('journey', []).controller('journeyController', function ($scope, $http,$location) {

    $http.get("/test/api/generalInfo.json")
        .then(function (response) {
            $scope.genericInfo = response.data;
        });

    $scope.view = { mode: "validate" };

    $scope.proceed = function () {
        $http.post('/journeys', {}).then(function (response) {
            
            $scope.entryId = response.data.id;
            
            $scope.view = { mode: "end" };
        }).catch(function () {
            $scope.status = 'Failed...';
        });
    };


    $scope.end = function () {
        $scope.view = { mode: "captureKilometres" };
    };

    $scope.register = function (amount) {
        console.log("Upoen "+amount)
        $http.patch('/journeys/'+$scope.entryId, { ended:true,kilometres:amount }).then(function (response) {
            $scope.view = { mode: "endFinish" };
        }).catch(function () {
            $scope.status = 'Failed...';
        });

        $location.path("/");
    };


});