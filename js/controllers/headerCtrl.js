angular.module('app')
    .controller('headerCtrl', ['$scope', '$sce', function($scope, $sce){
        $scope.$on('changeTitle', function(event, data) {
            $scope.webinarTitle = data;
        });
    }]);