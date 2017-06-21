app.controller('Linha', function($scope, Status, $filter, $routeParams, Favoritas, Linhas) {
  Status.getStatus(function(data) {
    $scope.status = $filter('filter')(data, {
      linha: $routeParams.id
    });
  });
});
