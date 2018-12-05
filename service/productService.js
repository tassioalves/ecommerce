angular.module("ecommerce").factory("productService", function ($http) {

    var url = "http://ecommerce-cpw.herokuapp.com/rest";


    var _cadProduct = function (produto) {
        var token = localStorage.getItem("token");


        var requerimentoPost = {
            method: "POST",
            url: url + "/product",
            headers: {
                "Authorization": "Bearer " + JSON.parse(token),
                "Content-Type": "application/json"
            },
            data: produto
        };
            return $http(requerimentoPost);
    };


    var _buscarProdutosPorIdCategoria = function (idCategoria, pagina) {
        return $http.get(url + "/product/list/" + idCategoria + "/" + pagina);
    };


    var _buscarProdutosPorId = function (idProduto) {
        return $http.get(url + "/product/" + idProduto);

    };

    return {
        buscarProdutosPorIdCategoria: _buscarProdutosPorIdCategoria,
        buscarProdutosPorId: _buscarProdutosPorId,
        cadProduct: _cadProduct
    }

});