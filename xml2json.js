var X2JS = require('xml2js').Parser(),
	fs = require('fs');
fs.watch('input/input.xml', function() {
	console.log("file changed .........", arguments);
	fs.readFile('input/input.xml', function(err, data) {
		if (err) throw err;
		console.log(data.toString());
		// listen to a file and interprit as json in console
	X2JS.parseString(data.toString(), function(err, result) {
		console.log("test ", JSON.stringify(result));

	});
	});
	
});