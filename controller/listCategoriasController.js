angular.module("ecommerce")
    .controller("listCategoriasController"
        , function ($scope, categoryService, $location) {


            var carregarCategorias = function () {
                categoryService.listarTodasAsCategorias()
                    .then(function (response) {
                        $scope.categorias = response.data;
                    }).catch(function (response) {
                    console.log(response);
                });
            };

            $scope.novaCategory = function () {
                $location.url("/cadCategoria");
            };
            carregarCategorias();
        });