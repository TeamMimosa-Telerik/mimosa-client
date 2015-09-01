console.log("in config.js");
System.config({
	transpiler: "babel",
	babelOptions: {
		optional: [
			"runtime"
		]	
	},
	map: {
		babel: '../lib/babel-core/browser.min.js',
		jquery: '../lib/jquery/dist/jquery.js',
		bootstrap: '../lib/dist/bootstrap.js',
		//handlebars: '../lib/handlebars/handlebars.js',
	}
});