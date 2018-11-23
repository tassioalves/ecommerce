angular.module("ecommerce").factory("categoryService", function ($http) {

    var url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _listarTodasAsCategorias = function () {
        return $http.get(url + "/category/list");
    };

    var _buscarCategoriaPorId = function (idCategoria) {
        return $http.get(url + "/category/" + idCategoria);
    };

    var _cadCategory = function (categoria) {
        var token = localStorage.getItem("token");

        var requerimentoPost = {
            method: "POST",
            url: url + "/category",
            headers: {
                "Authorization": "Bearer " + JSON.parse(token),
                "Content-Type":"application/json"
            },
            data:categoria
        };
        return $http(requerimentoPost);
    };

    return {
        listarTodasAsCategorias: _listarTodasAsCategorias,
        buscarCategoriaPorId: _buscarCategoriaPorId,
        cadCategory: _cadCategory
    }
});