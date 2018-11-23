angular.module("ecommerce")
    .controller("listProductController"
        , function ($scope, productService, $location) {


            $scope.novoProduct = function () {
                $location.url("/cadProduto");
            };
        });