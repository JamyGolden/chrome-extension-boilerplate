define([
    "app"
],

function(app) {

    var Router = Backbone.Router.extend({
        routes: {
            "": "index"
        },

        index: function() {

        }

    });

    return Router;

});