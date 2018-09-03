app.service('loginService', loginService);
loginService.$inject = ['$http'];

function loginService($http) {
    this.login = function(data) {
        return $http.post('/login', data).then((response) => {
            return response
        }).catch((err) => { return err; })
    }
}