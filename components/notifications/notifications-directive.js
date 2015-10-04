'use strict';

(function (angular) {

  angular
    .module('notifications')
    .directive('notifications', notificationsDirective);

  function notificationsDirective() {
    return {
      restrict: 'E',
      templateUrl: '/components/notifications/notifications-template.html'
    };
  }

})(angular);