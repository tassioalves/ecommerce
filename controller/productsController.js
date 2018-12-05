angular.module("ecommerce")
    .controller("productsController",
        function ($scope,$location, productService,carrinhoService, categoryService, $routeParams) {


            var carregarProdutos = function () {
                var id = $routeParams.idCategoria;
                productService.buscarProdutosPorIdCategoria(id, 1)
                    .then(function (response) {
                        $scope.produtos = response.data;
                    })
                    .catch(function (response) {
                        alert(response.data);
                    })
            };

            var carregarCategoria = function () {
                var id = $routeParams.idCategoria;
                categoryService.buscarCategoriaPorId(id)
                    .then(function (response) {
                        $scope.categoria = response.data;
                    })
                    .catch(function (response) {
                        alert(response);
                    })
            };

            $scope.produtoDetalhe = function (idProduto) {
                $location.url("/detalhe/" + idProduto);
            }

            $scope.addCarrinho = function (produto) {
                carrinhoService.addProduto(produto, 1)
                alert("Produto Adicionado!")
            };


            carregarCategoria();
            carregarProdutos();

        });