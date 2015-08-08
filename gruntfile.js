module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    pagespeed: {
	  options: {
	    nokey: true,
	    url: "https://www.html5rocks.com",
	    strategy: "mobile"
	  }
	}
  });

grunt.loadNpmTasks('grunt-pagespeed');

};