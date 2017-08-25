angular.
    module('header', []).
    factory(
    'errorHandler', function() {
        var obj = {};
        obj.msgs=[];
        obj.err = function(msg) {
            obj.msgs.push({ type: "error", message: msg })
            console.log("ErrorHandler.err: " + obj.msgs)
        }
        return obj;
    }).controller('errorController', ['errorHandler','$scope', function (errorHandler,$scope) {
        console.log("constructor function for errorController")
        $scope.messages = errorHandler.msgs
        console.log("setting scope array -->"+$scope.messages)
    }]);

function MessageNotifier() {
    this.msgs = [];
    this.err = function (msg) {
        
        this.msgs.push({ type: "error", message: msg })
        console.log("ErrorHandler.err: " + msgs)
        //$rootScope.$emit('notifying-service-event');
    }

}
console.log("end of header.js")
//Genreate a watch alternative
//Generate an event alternative