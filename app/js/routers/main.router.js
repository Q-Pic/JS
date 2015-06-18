;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {
      var args = options || {};
      this.collection = args.collection;
    },

    routes: {

      '' : 'login',
      '/main/:id' : 'mainPage',
      '/single' : 'singlePost',
      '/leaderboard/:id' : 'leaderboardPage'

      },

    login: function() {
      new app.Views.Login({
        collection: this.collection
      });
    },

    mainPage: function(id) {
      new app.Views.Main({
        collection: this.collection
      });
    },

    leaderboardPage: function(id) {
      new app.Views.Leaderboard({
        collection: this.collection
      })
    },

    singlePost: function () {
      console.log('singlePost function');
      new app.Views.Single({
        singleID: id,
        collection: this.collection
      })
    }

  });

}());
