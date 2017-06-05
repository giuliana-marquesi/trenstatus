app.controller('Speaker', function($scope, $filter, $routeParams, $window, Speakers) {

    var myfilter = $filter;
    Speakers.getSpeakers(function(data) {
        //filter passando data me retornar o objeto no json com o id da rota
        $scope.speaker = myfilter('filter')(data, {
            id: $routeParams.id
        })[0];
    });

    //função do botão chamado pelo ng-click para voltar no navegador.
    $scope.backApp = function() {
        $window.history.back();
    }
});
