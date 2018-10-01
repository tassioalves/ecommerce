angular.module("ecommerce").config(["$routeProvider", function ($routeProvider) {

    /**
     * Rota para home do sistema!
     */
    $routeProvider.when("/home",{
        templateUrl:"view/home.html",
        controller:"homeController"
    });

    $routeProvider.when("/categoryProducts/:idCategoria",{
        templateUrl:"view/categoryProductsView.html",
        controller:"productsController"
    })

}]);