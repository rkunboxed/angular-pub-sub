'use strict';

(function (angular) {

  angular
    .module('header')
    .directive('myHeader', headerDirective);

  function headerDirective() {
    return {
      restrict: 'E',
      templateUrl: '/components/header/templates/header-template.html'
    };
  }

})(angular);