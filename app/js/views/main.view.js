;(function() {

  'use strict';


  app.Views.Main = Backbone.View.extend ({

    className: 'main',

    events: {

        'click #delete': 'deleteAccount',
        'click #takemetosingleview' : 'singleViewFunction'
    },

    template: hbs.main,

    initialize: function(options) {

        var args = options || {};
        this.collection = args.collection;
        this.render();
        $('.container').html(this.el);


    },

    render: function() {
      this.collection = new app.Collections.Posts();

      this.collection.fetch().done(function (data) {
        this.$el.html(this.template({ image: this.collection.toJSON() }))
      }.bind(this));

// TRINI ADDED THIS

      this.$el.html(this.template({ owner: this.collection.toJSON() }))
    }.bind(this));

  this.$el.html(this.template({ solved: this.collection.toJSON() }))
}.bind(this));

    },


    singleViewFunction: function() {
      app.mainRouter.navigate('/single', {trigger: true});

    },




    // DELETING ACCOUNT
    deleteAccount: function (event) {

      event.preventDefault();

      var button = event.target;
      var modelID = $(button).data('id');

      if (window.confirm("Delete your Qpic account?")) {
        this.collection.destroy().success( function () {
           app.mainRouter.navigate('', { trigger: true });
        });
      }
  }

});

}());
