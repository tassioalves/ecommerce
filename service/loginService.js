angular.module("ecommerce").factory("loginService", function ($http) {

    var url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _signup = function (user) {
        return $http.post(url + "/user/signup", user);
    };


    var _login = function (usuario) {

        var dadosBase64 = window.btoa(usuario.email + ":" + usuario.senha);

        var req = {
            method: "GET",
            url: url + "/user/login",
            headers: {
                "Authorization": "Basic " + dadosBase64
            }
        }
        return $http(req);
    };
    return {
        login: _login,
        signup: _signup
    }
});