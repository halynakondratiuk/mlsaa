var angular = require('angular');

module.exports = angular
    .module('app.mainTrainerPage.module', [])
    .component('mainPage',{
        templateUrl:'/app/js/trainerPage/components/mainPage.template.html',
        controller: MainPageController
    })
    .factory('MainPageFactory', ['$resource',
        function($resource) {
            return $resource('', {}, {
                all: {
                    method: "GET",
                    url: ""
                }
            });
        }
    ]);

function MainPageController ($scope, MainPageFactory) {
    $scope.mainPage = MainPageFactory.all();
};

// http://localhost:8089/api/v1/training-trainers

