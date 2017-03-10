angular.module('app')
    .controller('webinar3Ctrl', ['$scope','$rootScope', 'FormService', function($scope, $rootScope, FormService){
        $scope.showSuccess = false;
        $scope.showError = false;
        $rootScope.$broadcast('changeTitle', "GDPR Hintergrund");
        $scope.submitForm = function(form) {
            FormService.sendForm(form, 'webinar_sailpoint3').then(function(result){
                if(result.error){
                    $scope.showSuccess = false;
                    $scope.showError = true;
                    $scope.errorText = result.responseText;
                }else{
                    $scope.showSuccess = true;
                    $scope.showError = false;
                    $scope.successText = result.responseText;
                }
            })
        };

    }]);