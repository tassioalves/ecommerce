angular.module("ecommerce")
    .controller("minhasComprasController",
        function ($scope, carrinhoService) {

            var listarCompras = function () {
                carrinhoService.listagemDeCompras()
                    .then(function (response) {
                        $scope.compras = response.data;
                    })
                    .catch(function (response) {
                        alert(response.data);
                    })
            };

            $scope.detalhesDaCompra = function (idCompra) {
                carrinhoService.detalhesDaCompra(idCompra)
                    .then(function (response) {
                        $scope.produtosDaCompra = response.data;
                    })
                    .catch(function (response) {
                        alert(response.data);
                    })
            };


            listarCompras();
        });