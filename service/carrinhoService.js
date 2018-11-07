angular.module("ecommerce").factory("carrinhoService", function ($http) {
    var carrinho = [];


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


    var _atualizarProduto = function (produto) {
//Salva o produto no localStorage
    };
    var _limparCarrinho = function () {
//Limpa o localStorage
    };


    return {
        addProduto: _addProduto,
        removerProduto: _removerProduto,
        listarProdutos: _listarProdutos,
        atualizarProduto: _atualizarProduto,
        limparCarrinho: _limparCarrinho
    }
});