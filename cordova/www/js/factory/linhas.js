app.factory('Linhas', function($http) {
    var metroList;
    var tremList;
    var saveMetroList = function(data) {
      metroList = data;
    };

    var saveTremList = function(data) {
      tremList = data;
    };

    var getMetroList = function(callback) {
      if (metroList) {
          callback(metroList);
          return false;
      } else {
        $http({
            method: 'GET',
            url: 'data/metro.json'
        }).success(function(data) {
            saveMetroList(data);
            callback(data);
        }).
        error(function() {
            //error
        });
      }
    };

    var getTremList = function(callback) {
      if (tremList) {
          callback(tremList);
          return false;
      } else {
        $http({
            method: 'GET',
            url: 'data/trem.json'
        }).success(function(data) {
            saveTremList(data);
            callback(data);
        }).
        error(function() {
            //error
        });
      }
    };

    return {
      getMetroList: getMetroList,
      getTremList: getTremList
    };
});
