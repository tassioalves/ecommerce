angular.module("ecommerce").controller("homeController", function ($scope, categoryService, $location) {


    var carregarCategorias = function () {
        categoryService.listarTodasAsCategorias()
            .then(function (response) {
                //console.log(response.data);
                $scope.categorias = response.data;
            }).catch(function (response) {
            console.log(response);
        });
    };

    $scope.buscar = function (categoriaId) {
        categoryService.buscarCategoriaPorId(categoriaId)
            .then(function (response) {
                $scope.categoria = response.data;
            })
            .catch(function (response) {
                alert(response.date);
            })
    };

    $scope.abrirCarrinho = function () {
        $location.url("/carrinho");
    }

    $scope.signup = function () {
        $location.url("/signup");
    }


    var carregarHome = function () {
        $location.url("/home");
    };

    carregarCategorias();
    carregarHome();

});