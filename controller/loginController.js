angular.module("ecommerce")
    .controller("loginController",
        function ($scope, loginService, $location) {

            $scope.login = function (usuario) {
                loginService.login(usuario)

                    .then(function (response) {
                        var user = response.data;
                        localStorage.setItem("usuarios", JSON.stringify(user));
                        localStorage.setItem("token", JSON.stringify(user.token));
                        $location.url("/home");
                    })
                    .catch(function (response) {
                        alert(response.data);
                    })
            };

            $scope.signup = function (user) {
                loginService.signup(user)
                    .then(function () {
                        $location.url("/home");
                    })
                    .catch((function () {
                        alert("Usuario ja existe!");
                        user.name = "";
                        user.email = "";
                        user.password = "";

                    }))
            }
        });