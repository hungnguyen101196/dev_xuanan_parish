// login controller
app.controller('loginController', function loginController($scope, loginService) {
    $scope.login = function() {
        $scope.data = {
            UserName: 'Nguyenhung',
            Password: 'nguyenhung'
        }
        loginService.login($scope.data).then((response) => {
            console.log(response)
        }).catch(err => console.log(err))
    }
});
// loginController.$inject = ['$scope', 'loginService'];

// function loginController($scope, loginService) {
//     $scope.login = function() {
//         $scope.data = {
//             UserName: 'Nguyenhung',
//             Password: 'nguyenhung'
//         }
//         loginService.login($scope.data).then((response) => {
//             console.log(response)
//         }).catch(err => console.log(err))
//     }
// }