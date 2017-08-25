angular.
    module('header', []).
    service(
    'errorHandler', [MessageNotifier]).controller('errorController', ['errorHandler','$scope', function (errorHandler,$scope) {
        console.log("constructor function for errorController")
        $scope.messages = errorHandler.msgs
        console.log("-->"+$scope.messages)
    }]);

function MessageNotifier() {
    var msgs = [];
    this.err = function (msg) {
        
        this.msgs.push({ type: "error", message: msg })
        console.log("ErrorHandler.err: " + msgs)
        //$rootScope.$emit('notifying-service-event');
    }
}
console.log("end of header.js")
//Genreate a watch alternative
//Generate an event alternative