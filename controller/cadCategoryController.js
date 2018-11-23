angular.module("ecommerce")
    .controller("cadCategoryController",
        function ($scope, categoryService,$location) {

            $scope.cadastroDeCategoria = function (categoria) {
                categoryService.cadCategory(categoria)
                    .then(function (res) {
                        $location.url("/listCategory");
                    })
                    .catch(function (res) {
                    alert("nao cadastrou")
                })
            };
        });
