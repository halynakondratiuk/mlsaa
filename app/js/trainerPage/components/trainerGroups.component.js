var angular = require('angular');

module.exports = angular
    .module('app.trainerGroupsPage.Module', [])
    .component('trainerGroups', {
        templateUrl:'/app/js/trainerPage/components/trainerGroups.template.html',
        controller: TrainerGroupsController
    })
    .factory('TrainerGroupsFactory', ['$resource',
        function($resource) {
            return $resource('', {}, {
                all: {
                    method: "GET",
                    url: ""
                }
            });
        }
    ])
function TrainerGroupsController($scope, TrainerGroupsFactory) {
    $scope.trainerGroup = TrainerGroupsFactory.all();
};
