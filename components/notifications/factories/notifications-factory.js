'use strict';

/*
 * The NotificationsFactory handles all the websocket communication and callbacks
 * And provides methods for getting various data about notifications (notificications data, count, hasNotifications)
 *
 * The Factory can also support registering callbacks for (in this example) push based / socket events
 */
(function (angular) {

  angular
    .module('notifications')
    .factory('NotificationsFactory', notificationsFactory);

  //$interval is only here to mock a push based protoocal, like websockets
  notificationsFactory.$inject = ['$interval'];

  function notificationsFactory($interval) {

    //simulating an API response or websocket callbacks
    var mockNotifications = [{
      title: 'Notification 1'
    },{
      title: 'Notification 2'
    },{
      title: 'Notification 3'
    },{
      title: 'Notification 4'
    },{
      title: 'Notification 5'
    },{
      title: 'Notification 6'
    }];

    var NotificationsFactory = function(){
      var notifications = [];
      var callbacks = [];

      function publishEvent(){
        angular.forEach(callbacks, function(obj, idx){
          console.log('publish event for ' + obj.name);
          obj.func(notifications);
        });
      }

      $interval(function(){
        var rand = Math.floor((Math.random() * mockNotifications.length) + 1);

        notifications = mockNotifications.slice(0, rand);

        publishEvent();
      }, 3000);

      return {
        getNotifications: function(){

          return notifications;
        },

        getNotificationsCount: function(){
          return notifications.length;
        },

        hasNotifications: function () {
          return notifications.length > 0;
        },

        registerCallback: function(callbackName, callbackFunction){
          callbacks.push({
            name: callbackName,
            func: callbackFunction
          })
        }

      };

    };

    return new NotificationsFactory();

  }
}(angular));