/* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
Filename: app.jake
Date: 6/1/17
Author: Chris Mendez http://chrisjmendez.com
Description: Terminal commands to help kill apps on unwanted ports
* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **/

var util = require('util');

namespace('fix', function () {
	desc('Error: bind EADDRINUSE null:8080. Ex: jake fix:port[8080]');
	task('port', { async: true }, { breakOnError: true }, function(port) {
		var port = port || 5000
		var cmds = [ util.format( 'sudo lsof -i -P | grep %s', port) ];
		jake.exec(cmds, { printStdout: true });
	});

});

namespace('find', function () {
	desc('Error: bind EADDRINUSE null:5000. Ex: jake find:node');
	task('node', { async: true }, { breakOnError: true }, function() {
		var cmds = [ util.format( 'ps aux | grep node') ];
		jake.exec(cmds, { printStdout: true });
	});
});