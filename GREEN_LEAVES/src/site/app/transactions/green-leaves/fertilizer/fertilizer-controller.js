(function () {
    //module
    angular.module("fertilizerModule", []);
    //controller
    angular.module("fertilizerModule")
            .controller("FertilizerController", function ($scope) {
                //data models 
                $scope.model = {};

                //ui models
                $scope.ui = {};

                //http models
                $scope.http = {};

                $scope.ui.init = function () {
                };

                $scope.ui.init();

            });
}());