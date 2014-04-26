'use strict';

angular
    .module('courseraDesignClassApp', [
        'ui.router',
        'ngDisqus'
    ]).config(function($stateProvider, $urlRouterProvider, $disqusProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                abstract: true,
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('main.home', {
                url: '/',
                templateUrl: 'views/pages/home.html',
                controller: 'PageCtrl'
            })
            .state('main.page', {
                url: '/page/:pageName',
                templateUrl: 'views/page.html',
                controller: 'PageCtrl'
            });

        $disqusProvider.setShortname('courseradesignclass');
    });
