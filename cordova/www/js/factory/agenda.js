app.factory('Agenda', function($http) {
    var agendaList;
    var obj = {};

    obj = {
        getAgenda: function(callback) {
            //se já tiver os dados retornar
            if (agendaList) {
                callback(agendaList);
                return false;
            } else {

                $http({
                    method: 'GET',
                    url: 'data/agenda.json'
                }).success(function(data) {
                    // erros
                    obj.saveAgenda(data);
                    callback(data);

                }, function(error) {
                  console.log(error);
                })
            }
        },
        saveAgenda: function(data) {
            agendaList = data;
        }
    }

    return obj;
})
