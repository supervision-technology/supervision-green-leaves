(function () {
    //index module
    angular.module("appModule", ["ngRoute", "homeModule", "greenLeavesReceiveModule", "clientAdvanceRequestModule", "clientAdvanceApproveModule", "greenLeavesWeighModule","greenLeavesPaymentModule","priceSettingModule","finalPaymentModule","monthlyGreenLeavesSummryModule"]);

    //route config
    angular.module("appModule")
            .config(function ($routeProvider) {
                $routeProvider
                        //system
                        .when("/", {
                            templateUrl: "app/system/home/home.html",
                            controller: "homeController"
                        })

                        //green leaves
                        .when("/transactions/green-leaves/green-leaves-receive", {
                            templateUrl: "app/transactions/green-leaves/green-leaves-receive/green-leaves-receive.html",
                            controller: "greenLeavesReceiveController"
                        })

                        .when("/transactions/green-leaves/client-advance/client-advance-request", {
                            templateUrl: "app/transactions/green-leaves/client-advance/client-advance-request.html",
                            controller: "clientAdvanceRequestController"
                        })
                        .when("/transactions/green-leaves/client-advance/client-advance-approve", {
                            templateUrl: "app/transactions/green-leaves/client-advance/client-advance-approve.html",
                            controller: "clientAdvanceApproveController"
                        })
                        .when("/transactions/green-leaves/green-leaves-weigh/green-leaves-weigh", {
                            templateUrl: "app/transactions/green-leaves/green-leaves-weigh/green-leaves-weigh.html",
                            controller: "greenLeavesWeighController"
                        })
                        .when("/transactions/green-leaves/green-leaves-weigh/green-leaves-payment", {
                            templateUrl: "app/transactions/green-leaves/green-leaves-payment/green-leaves-payment.html",
                            controller: "greenLeavesPaymentController"
                        })
                        .when("/transactions/green-leaves/green-leaves-weigh/price-setting", {
                            templateUrl: "app/transactions/green-leaves/price-setting/price-setting.html",
                            controller: "priceSettingController"
                        })
                        .when("/transactions/green-leaves/green-leaves-weigh/final-payemnt", {
                            templateUrl: "app/transactions/green-leaves/final-payemnt/final-payemnt.html",
                            controller: "finalPaymentModuleController"
                        })
                        .when("/transactions/green-leaves/monthly-green-leaves-summry/monthly-green-leaves-summry", {
                            templateUrl: "app/transactions/green-leaves/monthly-green-leaves-summry/monthly-green-leaves-summry.html",
                            controller: "monthlyGreenLeavesSummryController"
                        })

                        .otherwise({
                            redirectTo: "/"
                        });
            });
}());