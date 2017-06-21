app.factory('Favoritas', function($http) {
    var favoritas = [];

    var get = function() {
      return favoritas.sort(function(a, b){return a.id-b.id});
    };

    var set = function(obj) {
      favoritas.push(obj);
    };

    var remove = function(obj) {
      favoritas = favoritas.filter(function(el) {
        return el.linha != obj.linha;
      });
    };

    return {
      get: get,
      set: set,
      remove: remove
    };
});
