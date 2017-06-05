app.controller('Agenda', function($scope, Agenda) {

    $scope.agenda = {};

    //factory obter agenda
    Agenda.getAgenda(function(data) {
        $scope.agenda = data;
    });

});
