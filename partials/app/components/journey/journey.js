
angular.module('journey', []).controller('journeyController',['errorHandler',"$scope", "$http","$location",  function (errorHandler, $scope, $http,$location) {

    console.log('inside journeyController constructor')
    $http.get("/test/api/generalInfo.json")
        .then(function (response) {
            $scope.genericInfo = response.data;
        }).catch(function() {
            
        });

    $scope.view = { mode: "validate" };

    $scope.proceed = function () {
        $http.post('/jfourneys', {}).then(function (response) {
            
            $scope.entryId = response.data.id;
            
            $scope.view = { mode: "end" };
        }).catch(function () {
            errorHandler.err("this did not work out")
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


}]);