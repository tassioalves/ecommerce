angular.module("ecommerce")
    .controller("detalheProductController",
        function ($scope, $location, productService, $routeParams, carrinhoService) {


            var detalheProduto = function () {
                var id = $routeParams.idProduto;
                productService.buscarProdutosPorId(id)
                    .then(function (reponse) {
                        $scope.produto = reponse.data;
                    })
                    .catch(function (response) {
                        alert(response);
                    })
            };

            $scope.addCarrinho = function (produto, qtde) {
                carrinhoService.addProduto(produto, qtde);
                $location.url("/carrinho");

            };


            detalheProduto();
        });