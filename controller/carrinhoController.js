angular.module("ecommerce")
    .controller("carrinhoController",
        function ($scope, carrinhoService) {

            var listarProdutosDoCarrinho = function () {
                $scope.carrinho = carrinhoService.listarProdutos();

                $scope.total = 0;
                for (var i in $scope.carrinho) {
                    var produto = $scope.carrinho[i];
                    $scope.total = $scope.total + (produto.qtde * produto.price);
                }
            };

            $scope.removerProdutoDoCarrinho = function (id) {
                $scope.produto = carrinhoService.removerProduto(id);
                listarProdutosDoCarrinho();

            }


            listarProdutosDoCarrinho();
        });