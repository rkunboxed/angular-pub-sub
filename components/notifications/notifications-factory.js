'use strict';

(function (angular) {

  angular
    .module('notifications')
    .factory('NotificationsFactory', notificationsFactory);

  function notificationsFactory() {

    //simulating an API response
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

      return {
        getNotifications: function(){
          var rand = Math.floor((Math.random() * mockNotifications.length) + 1);

          notifications = mockNotifications.slice(0, rand);

          return notifications;
        },

        getNotificationsCount: function(){
          return notifications.length;
        },


        hasNotifications: function () {
          return notifications.length > 0;
        }

      };

    };

    return new NotificationsFactory();

  }
}(angular));