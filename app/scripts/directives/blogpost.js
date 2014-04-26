'use strict';

angular.module('courseraDesignClassApp')
    .directive('blogPost', function() {
        return {
            templateUrl: 'views/directives/blogpost.html',
            restrict: 'E',
            transclude: true,
            scope: true,
            link: function postLink($scope, $element, $attrs) {
                $scope.title = $attrs.title;
                $scope.subTitle = $attrs.subTitle;
                $scope.date = $attrs.date;
            }
        };
    });
