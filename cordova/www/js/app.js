var app = angular.module('trenstatus', ['ngRoute']).config(
    function($routeProvider) {
        /*ROTAS*/
        $routeProvider
            .when('/speakers', {
                templateUrl: 'templates/speakers.html',
                controller: 'Speakers'
            })
            .when('/speaker/:id', {
                templateUrl: 'templates/speaker.html',
                controller: 'Speaker'
            })
            .when('/agenda', {
                templateUrl: 'templates/agenda.html',
                controller: 'Agenda'
            }).otherwise({
                redirectTo: '/agenda'
            });

    });
