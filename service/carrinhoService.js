angular.module("ecommerce").factory("carrinhoService", function ($http) {
    var carrinho = [];
    var url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _addProduto = function (produto, qtde) {
        carrinho = _listarProdutos();
        for (var i in carrinho) {
            if (carrinho[i].id == produto.id) {
                carrinho[i].qtde = carrinho[i].qtde + qtde;
                localStorage.setItem("carrinho", JSON.stringify(carrinho));
                return;
            }
        }
        produto.qtde = qtde;
        carrinho.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    };


    var _listarProdutos = function () {
        var obj = localStorage.getItem("carrinho");
        if (obj) {
            carrinho = JSON.parse(obj);
        }
        return carrinho;
    };


    var _removerProduto = function (id) {
        //Remove o produto do localStorage
        carrinho = _listarProdutos();

        for (var i in carrinho) {
            if (carrinho.length > 0) {
                if (carrinho[i].id == id) {
                    carrinho.splice(i, 1);
                    localStorage.setItem("carrinho", JSON.stringify(carrinho));

                    return;
                }
            }
        }
    };


    var _finalizarCompra = function (carrinho) {
        var token = localStorage.getItem("token");
        var requerimentoPost = {
            method: "POST",
            url: url + "/order",
            headers: {
                "Authorization": "Bearer " + JSON.parse(token),
                "Content-Type": "application/json"
            },
            data: carrinho
        };
        return $http(requerimentoPost);
    };


    var _listagemDeCompras = function () {
        var token = localStorage.getItem("token");

        var requerimentoGet = {
            method: "GET",
            url: url + "/order/list/1",
            headers: {
                "Authorization": "Bearer " + JSON.parse(token)
            }
        };
        return $http(requerimentoGet);
    };

    var _detalhesDaCompra = function (idCompra) {
        var token = localStorage.getItem("token");

        var requerimentoGet = {
            method: "GET",
            url: url + "/order/" + idCompra,
            headers: {
                "Authorization": "Bearer " + JSON.parse(token)
            }
        };
        return $http(requerimentoGet);
    };

    return {
        addProduto: _addProduto,
        removerProduto: _removerProduto,
        listarProdutos: _listarProdutos,
        finalizarCompra: _finalizarCompra,
        listagemDeCompras: _listagemDeCompras,
        detalhesDaCompra: _detalhesDaCompra
    }
});