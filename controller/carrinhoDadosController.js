angular.module("ecommerce")
    .controller("carrinhoDadosController",
        function ($scope, carrinhoService, $location) {
            var carrinho = [];

            var listarProdutosDoCarrinho = function () {
                $scope.carrinho = carrinhoService.listarProdutos();

                $scope.total = 0;
                for (var i in $scope.carrinho) {
                    var produto = $scope.carrinho[i];
                    $scope.total = $scope.total + (produto.qtde * produto.price);
                }
            };

            $scope.confirmarCompra = function () {
                carrinho = localStorage.getItem("carrinho");
                carrinho = JSON.parse(carrinho);
                carrinhoService.finalizarCompra(carrinho)
                    .then(function (res) {
                        $location.url("/minhasCompras");
                    })
                    .catch(function (res) {
                        alert(res.data)
                    })
            };

            listarProdutosDoCarrinho();
        });