'use strict';

angular
  .module('header')
  .controller('HeaderController', headerController);

headerController.$inject = ['$log'];

function headerController ($log){
  $log.debug('ENTER HeaderController');
  var vm = this;

  vm.notifications = [];

  vm.hasNotifcations = function (){
    return notifications.length > 0;
  };

  vm.notifcationsCount = function(){
    return vm.notifications.length;
  };
}