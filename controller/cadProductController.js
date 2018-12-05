angular.module("ecommerce")
    .controller("cadProductController",
        function ($scope, categoryService, productService) {

            var carregarCategoriasCadastro = function () {
                categoryService.listarTodasAsCategorias()
                    .then(function (response) {
                        $scope.categoriass = response.data;
                    }).catch(function (response) {
                    alert(response.data;
                });
            };

            $scope.cadastroDeProduto = function (produto) {
                produto.img = produto.img.base64;
                productService.cadProduct(produto)
                    .then(function (res) {
                        $location.url("/listProduct");
                    })
                    .catch(function (res) {
                        alert(res.data)
                    })
            };

            carregarCategoriasCadastro();
        });
