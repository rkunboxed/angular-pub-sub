'use strict';

/*
 *
 */

(function (angular) {

  angular
    .module('notifications')
    .directive('notifications', notificationsDirective);

  notificationsController.$inject = ['NotificationsFactory'];

  function notificationsController (NotificationsFactory){
    var vm = this;

    console.log(NotificationsFactory);

    NotificationsFactory.registerCallback('notificationsDirective', function(){
      //XXX TODO register as a callback to get updates
      vm.notifications = NotificationsFactory.getNotifications();
      vm.hasNotifications = NotificationsFactory.hasNotifications;

      console.log(vm.notifcations);
    });
  }

  function notificationsDirective() {
    return {
      restrict: 'E',
      templateUrl: '/components/notifications/notifications-template.html',
      controller: notificationsController,
      controllerAs: 'NotificationsCtrl'
    };
  }

})(angular);