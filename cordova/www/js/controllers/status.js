app.controller('Status', function($scope, $filter, $routeParams, $window, Status, Linhas, Favoritas) {
  $scope.isFavorite = function(obj) {
    obj.favorite = !obj.favorite;
    if (!obj.favorite) {
      Favoritas.remove(obj);

      return;
    }

    Favoritas.set(obj);
  }

  var mergeLists = function(list) {
    var newList = [];
    Status.getStatus(function(data) {
      angular.forEach(list, function(value, key) {
        value['status'] = $filter('filter')(data, {
          linha: value.linha
        });
        newList.push(value);
      });
    });

    return newList;
  }

  Linhas.getMetroList(function(linhas) {
    $scope.metroList = mergeLists(linhas);
    console.log($scope.metroList);
  });

  Linhas.getTremList(function(linhas) {
    $scope.tremList = mergeLists(linhas);
  });
});
