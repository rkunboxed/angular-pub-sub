'use strict';

/*
 *
 */

(function (angular) {

  angular
    .module('notifications')
    .directive('notificationsBadge', notificationsBadgeDirective);

  notificationsBadgeDirective.$inject = ['NotificationsFactory'];

  function notificationsBadgeController (NotificationsFactory){
    var vm = this;

    NotificationsFactory.registerCallback('notificationsBadgeDirective', function(){
      vm.notifications = NotificationsFactory.getNotifications();
      vm.hasNotifications = NotificationsFactory.hasNotifications;
      vm.getNotificationsCount = NotificationsFactory.getNotificationsCount;
    });
  }

  function notificationsBadgeDirective() {
    return {
      restrict: 'E',
      templateUrl: '/components/notifications/templates/notifications-badge-directive-template.html',
      controller: notificationsBadgeController,
      controllerAs: 'NotificationsBadgeCtrl'
    };
  }

})(angular);