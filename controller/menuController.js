angular.module("ecommerce")
    .controller("menuController"
        , function ($scope, categoryService, loginService, $location) {


            var carregarCategorias = function () {
                categoryService.listarTodasAsCategorias()
                    .then(function (response) {
                        //console.log(response.data);
                        $scope.categorias = response.data;
                    }).catch(function (response) {
                    console.log(response);
                });
            };

            $scope.buscar = function (categoriaId) {
                categoryService.buscarCategoriaPorId(categoriaId)
                    .then(function (response) {
                        $scope.categoria = response.data;
                    })
                    .catch(function (response) {
                        alert(response.date);
                    })
            };

            $scope.abrirCarrinho = function () {
                $location.url("/carrinho");
            };

            $scope.signup = function () {
                $location.url("/signup");
            };

            $scope.userLogado = function () {
                var user = localStorage.getItem("usuario");
                user = JSON.parse(user);
                if (user) {
                    return true
                }
                return false
            };

            $scope.adminLogado = function () {
                var user = localStorage.getItem("usuario");
                user = JSON.parse(user);
                if (user) {
                    if ("ADMINISTRATOR" == user.personRole) {
                        return true
                    }
                }
                return false
            };
            $scope.logout = function () {
                localStorage.removeItem("usuario");
                localStorage.removeItem("token");
                $location.url("/home");
            };


            var carregarHome = function () {
                $location.url("/home");
            };

            carregarCategorias();
            carregarHome();

        });