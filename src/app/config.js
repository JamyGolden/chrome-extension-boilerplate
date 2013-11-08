require.config({
    deps: ['main'],
    baseUrl: './app',

    paths: {
        'backbone': '../js/vendor/backbone',
        'jquery': '../js/vendor/jquery',
        'underscore': '../js/vendor/underscore'
    },

    shim: {
        'backbone': {
            'deps': [
                'underscore',
                'jquery'
            ],
            'exports': 'Backbone'
        },
        'underscore': {
            'exports': '_'
        }
    }
});