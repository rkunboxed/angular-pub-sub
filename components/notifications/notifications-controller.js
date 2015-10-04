'use strict';

angular
  .module('notifications')
  .controller('NotificationsController', notificationsController);

notificationsController.$inject = ['$log', '$controller', 'NotificationsFactory'];

function notificationsController ($log, $controller, NotificationsFactory){
  $log.debug('ENTER NotificationsController');
  var vm = this;
  var headerController = $controller('HeaderController');

  vm.notifications = NotificationsFactory.getNotifications();
  headerController.setNotificationsCount(vm.notifications.length);
}