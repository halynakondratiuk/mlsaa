var angular = require('angular');

module.exports = angular
    .module('app.trainerTrainingsPage.Module', [])
    .component('trainerTrainings', {
        templateUrl: '/app/js/trainerPage/components/trainerTrainings.template.html',
        conroller: TrainerTrainingsController
    })
    .factory('TrainerTrainingsFactory', ['$resource',
        function($resource) {
            return $resource('', {}, {
                all: {
                    method: "GET",
                    url: ""
                }
            });
        }
    ]);
function TrainerTrainingsController ($scope, TrainerTrainingsFactory) {
    $scope.trainerTraining = TrainerTrainingsFactory.all();
};

    
