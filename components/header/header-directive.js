'use strict';

(function (angular) {

  angular
    .module('header')
    .directive('myHeader', headerDirective);

  function headerDirective() {
    return {
      restrict: 'E',
      templateUrl: '/components/header/header-template.html',
      controller: 'HeaderController'
    };
  }

})(angular);