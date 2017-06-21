var app = angular.module('trenstatus', ['ngRoute']).config(
  function($routeProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://agile-peak-78409.herokuapp.com/db'
    ]);
    /*ROTAS*/
    $routeProvider
      .when('/favoritas', {
        title: "Linhas Favoritas",
        templateUrl: 'templates/favoritas.html',
        controller: 'Favoritas'
      })
      .when('/linha/:id', {
        templateUrl: 'templates/linha.html',
        controller: 'Linha'
      })
      .when('/agenda', {
        templateUrl: 'templates/agenda.html',
        controller: 'Agenda'
      }).when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'Home'
      }).when('/status', {
        title: "Status",
        templateUrl: 'templates/status.html',
        controller: 'Status'
      })
      .otherwise({
        redirectTo: '/status'
      });
});

app.run(['$rootScope', '$http', '$routeParams', function($rootScope, $http, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      if(!current.$$route.title && $routeParams.id) {
        $rootScope.title = $routeParams.id;

        return;
      } else if(current.$$route.title && !$routeParams.id) {
        $rootScope.title = current.$$route.title;

        return;
      }

      $rootScope.title = "";
    });
    // $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // $http.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT';
}]);
