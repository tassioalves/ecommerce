angular.module("ecommerce").config(["$routeProvider", function ($routeProvider) {

    /**
     * Rota para home do sistema!
     */
    $routeProvider.when("/home", {
        templateUrl: "view/home.html",
        controller: "homeController"
    });

    $routeProvider.when("/categoryProducts/:idCategoria", {
        templateUrl: "view/productsView.html",
        controller: "productsController"
    });

    $routeProvider.when("/detalhe/:idProduto", {
        templateUrl: "view/detalheProductView.html",
        controller: "detalheProductController"
    });

    $routeProvider.when("/carrinho", {
        templateUrl: "view/carrinhoView.html",
        controller: "carrinhoController"
    });

    $routeProvider.when("/signup", {
        templateUrl: "view/loginView.html",
        controller: "loginController"
    });

    $routeProvider.when("/cadCategoria", {
        templateUrl: "view/cadCategoria.html",
        controller: "cadCategoryController"
    });
    $routeProvider.when("/cadProduto", {
        templateUrl: "view/cadProduto.html",
        controller: "cadProductController"
    });
    $routeProvider.when("/listCategory", {
        templateUrl: "view/listCategoriasView.html",
        controller: "listCategoriasController"
    });
    $routeProvider.when("/listProduct", {
        templateUrl: "view/listProdutosView.html",
        controller: "listProductController"
    });
    $routeProvider.when("/carrinhoDados",{
        templateUrl:"view/carrinhoDadosView.html",
        controller: "carrinhoDadosController"
    });
    $routeProvider.when("/minhasCompras",{
        templateUrl:"view/minhasComprasView.html",
        controller: "minhasComprasController"
    });


}]);