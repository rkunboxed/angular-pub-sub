'use strict';

/*
 *
 */

(function (angular) {

  angular
    .module('notifications')
    .directive('notificationsList', notificationsListDirective);

  notificationsListDirective.$inject = ['NotificationsFactory'];

  function notificationsListDirectiveController (NotificationsFactory){
    var vm = this;

    NotificationsFactory.registerCallback('notificationsDirective', function(){
      vm.notifications = NotificationsFactory.getNotifications();
      vm.hasNotifications = NotificationsFactory.hasNotifications;
    });
  }

  function notificationsListDirective() {
    return {
      restrict: 'E',
      templateUrl: '/components/notifications/templates/notifications-list-directive-template.html',
      controller: notificationsListDirectiveController,
      controllerAs: 'NotificationsListCtrl'
    };
  }

})(angular);