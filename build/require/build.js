({
	baseUrl: '../../src/app/',
	name: '../../src/js/vendor/almond',
	deps: ['main'],
	mainConfigFile: '../../src/app/config.js',
	optimize: 'uglify2',
	// generateSourceMaps: true,
	//preserveLicenseComments: false, //required for source map
	out: '../../public/app.js'
})