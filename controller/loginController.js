angular.module("ecommerce")
    .controller("loginController",
        function ($scope, loginService, $location) {

            $scope.login = function (usuario) {
                loginService.login(usuario)
                    .then(function (response) {
                        var user = response.data;
                        localStorage.setItem("usuario", JSON.stringify(user));
                        localStorage.setItem("token", JSON.stringify(user.token));
                        if (localStorage.getItem("finalizarCompra")) {
                            localStorage.removeItem("finalizarCompra");
                            $location.url("/carrinhoDados");

                        } else {
                            $location.url("/home");
                        }
                    })
                    .catch(function (response) {
                        usuario.email = null;
                        usuario.senha = null;
                        $scope.falha = true;
                        $scope.textFalha = " E-mail ou senha incorretos!"
                    })
            };

            $scope.signup = function (user) {
                loginService.signup(user)
                    .then(function () {
                        $location.url("/home");
                    })
                    .catch((function () {
                        user.name = null;
                        user.email = null;
                        user.password = null;
                        $scope.falha = true;
                        $scope.textFalha = "Usuário já cadastrado!"
                    }))
            }
        });