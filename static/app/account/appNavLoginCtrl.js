angular.module('app').controller('appNavLoginCtrl', function($scope){
    $scope.signin = function(username, password){
        console.log("appNavLoginCtrl: ", username, password);
    }
})