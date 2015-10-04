'use strict';

angular
  .module('header')
  .controller('HeaderController', headerController);

headerController.$inject = ['$log', 'NotificationsFactory'];

function headerController ($log, NotificationsFactory){
  $log.debug('ENTER HeaderController');
  var vm = this;
  var notifications = 0;

  vm.test = 'hello world';
  vm.NotificationsFactory = NotificationsFactory;

  vm.setNotificationsCount = function(count){
    notifications = parseInt(count, 10);
    vm.test = count;
    $log.debug('HeaderController vm.getNotificationsCount is ' + NotificationsFactory.getNotificationsCount());
    $log.debug('HeaderController vm.hasNotifications is ' + NotificationsFactory.hasNotifications());
  }
}