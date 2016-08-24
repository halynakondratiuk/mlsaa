var angular = require('angular');

module.exports = angular
    .module('app.trainerDescriptionPage.module', [])
    .component('trainerPage',{
        templateUrl:'/app/js/trainerPage/components/trainerPageDescription.template.html',
        controller: TrainingDescriptionController
    })
.factory('TrainerPageDescriptionFactory', ['$resource',
    function($resource) {
        return $resource('', {}, {
            all: {
                method: "GET",
                url: ""
            }
        });
    }
]);

function TrainingDescriptionController ($scope, TrainerPageDescriptionFactory) {
    $scope.trainerPage = TrainerPageDescriptionFactory.all();
};

// function TrainingDescriptionController ($scope, TrainerPageDescriptionFactory) {
//     this.$routerOnActivate = function (next, previous) {
//         var id = next.params.id;
//         $scope.trainerPageDescription = TrainerPageDescriptionFactory.all({id: id});
//
//     }
// };
