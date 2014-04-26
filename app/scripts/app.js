'use strict';

angular
    .module('courseraDesignClassApp', [
        'ui.router'
    ]).config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                abstract: true,
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('main.home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'PageCtrl'
            })
            .state('main.page', {
                url: '/page/:pageName',
                templateUrl: 'views/page.html',
                controller: 'PageCtrl'
            });
    });
