module.exports = function(grunt) {

  grunt.initConfig({
  	inline: {
        dist: {
            options:{
                cssmin: true,
                uglify: true
            },
            src: 'src/index.html',
            dest: 'dist/index.html'
        }
    },
	  htmlmin: {                                     // Task
	    dist: {                                      // Target
	      options: {                                 // Target options
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: {                                   // Dictionary of files
	        'dist/index.html': 'dist/index.html'     // 'destination': 'source'
	      }
	    }
	},
    pagespeed: {
	  options: {
	    nokey: true,
	    url: "http://14171dd5.ngrok.com"
	  },
	  prod: {
	    options: {
	      url: "http://14171dd5.ngrok.com",
	      locale: "en_US",
	      strategy: "mobile",
	      threshold: 80
	    }
	  }
	}
  });

grunt.loadNpmTasks('grunt-inline');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-pagespeed');

grunt.registerTask('default', ['inline', 'htmlmin', 'pagespeed']);

};