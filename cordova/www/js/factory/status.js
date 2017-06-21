app.factory('Status', function($http) {
        var statusList;
        var obj = {};

        obj = {
            getStatus: function(callback) {
                if (statusList) {
                    callback(statusList);
                    return false;
                } else {

                $http({
                    method: 'GET',
                    url: 'http://agile-peak-78409.herokuapp.com/db'
                }).success(function(data) {
                    // erros
                    obj.saveStatus(data);
                    callback(data);

                }, function(error) {
                  console.log(error);
                })
            }
        },
        saveStatus: function(data) {
            statusList = data;
        }
    }

    return obj;
});
