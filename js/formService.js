angular.module('app')
    .factory('FormService', ['$http', function($http){
        return{
            sendForm : function(formData, formName){
                return $http({
                    method: 'POST',
                    url: 'http://193.109.52.187/forms/'+formName,
                    data: $.param(
                        {
                            first_name: formData.first_name,
                            last_name: formData.last_name,
                            email: formData.email,
                            company: formData.company,
                            country: formData.country,
                            phone: formData.phone
                        }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function (success){
                    return {error:false, responseText:"Vielen Dank für Ihre Anmeldung. Weitere Informationen werden wir Ihnen per Email zukommen lassen."};
                },function (error){
                    return {error:true, responseText:"An error occured while sending request!"};
                });
            }
        }


    }]);