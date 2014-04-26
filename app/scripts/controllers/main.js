'use strict';

angular.module('courseraDesignClassApp')
    .controller('MainCtrl', function($scope) {
        $scope.pages = [{
            name: 'My Gap',
            link: 'my-gap'
        }, {
            name: 'Week #1',
            link: 'week-1'
        }, {
            name: 'Week #2',
            link: 'week-2'
        }, {
            name: 'Week #3',
            link: 'week-3'
        }, {
            name: 'Week #4',
            link: 'week-4'
        }, {
            name: 'Week #5',
            link: 'week-5'
        }, {
            name: 'Week #6',
            link: 'week-6'
        }, {
            name: 'Week #7',
            link: 'week-7'
        }, {
            name: 'Week #8',
            link: 'week-8'
        }];


        $scope.setCurrentLink = function(link){
            $scope.currentLink = link;
        };
    });
