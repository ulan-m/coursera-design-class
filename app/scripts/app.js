'use strict';

angular
    .module('courseraDesignClassApp', [
        'ui.router'
    ]).config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            });
    });
