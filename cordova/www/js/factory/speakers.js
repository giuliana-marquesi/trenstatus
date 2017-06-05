app.factory('Speakers', function($http) {
        var speakerList;
        var obj = {};

        obj = {
            getSpeakers: function(callback) {
                if (speakerList) {
                    callback(speakerList);
                    return false;
                } else {

                $http({
                    method: 'GET',
                    url: 'data/speakers.json'
                }).success(function(data) {
                    // erros
                    obj.saveSpeakers(data);
                    callback(data);

                }, function(error) {
                  console.log(error);
                })
            }
        },
        saveSpeakers: function(data) {
            speakerList = data;
        }
    }

    return obj;
});
