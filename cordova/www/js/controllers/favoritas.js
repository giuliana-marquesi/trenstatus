app.controller('Favoritas', function($scope, Favoritas) {
  $scope.favoritas = Favoritas.get();
});
