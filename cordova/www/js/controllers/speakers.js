app.controller('Speakers', function($scope, $routeParams, Speakers) {

    $scope.speakers = {};

    //factory obter speakers
    Speakers.getSpeakers(function(data) {
        $scope.speakers = data;
    });

});
