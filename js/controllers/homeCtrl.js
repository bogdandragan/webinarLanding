angular.module('app')
    .controller('homeCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
         $rootScope.$broadcast('changeTitle', "Data Access<br>Governance");
    }]);