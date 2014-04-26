'use strict';

angular.module('courseraDesignClassApp')
    .controller('PageCtrl', function($scope, $stateParams) {
        $scope.pageName = $stateParams.pageName;


        $scope.setCurrentLink($stateParams.pageName);
    });
