var stylus       = require('stylus');

module.exports = function( app, config ){

    function compile(str, path){
    	return stylus(str).set('filename', path);
    }
    app.use(stylus.middleware({
    	src:     config.rootPath + '/public',
    	compile: compile
    }));
    
    
}