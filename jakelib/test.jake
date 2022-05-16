/* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
Filename: test.jake
Date: 6/1/17
Author: Chris Mendez @chrisjmendez
Description: Terminal commands to help kill apps on unwanted ports
* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **/

var util = require('util');

namespace('test', function () {
	desc('Load Test');
	task('load', { async: true }, { breakOnError: true }, function(port) {
		var port = port || 5000
		var cmds = [ util.format( 'loadtest http://localhost:8080/ -n 1000 -c 100') ];
		jake.exec(cmds, { printStdout: true });
	});
});
