define([
    'backbone'
],

function(Backbone, Modernizr) {

    // Provide a global location to place configuration settings and module
    // creation.
    var app = {
        // The root path to run the application.
        root: "/"
    };

    // Localize or create a new JavaScript Template object.
    var JST = window.JST = window.JST || {};

    // Mix Backbone.Events, modules, and layout management into the app object.
    return _.extend(app, {
        // Create a custom object with a nested Views object.
        fetchTemplate: function(path) {
            // Append the file extension.
            path +=".html";

            // Should be an instant synchronous way of getting the template, if it
            // exists in the JST object.
            if (!JST[path]) {
                // Fetch it asynchronously if not available from JST, ensure that
                // template requests are never cached and prevent global ajax event
                // handlers from firing.
                $.ajax({
                    url:  this.root + path,
                    dataType: "text",
                    cache: false,
                    async: false,

                    success: function(contents) {
                        JST[path] = _.template(contents);
                    }
                });
            }

            // Ensure a normalized return value.
            return JST[path];
        }
    }, Backbone.Events);

});
