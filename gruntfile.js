module.exports = function(grunt) {

  grunt.initConfig({
 /*   htmlmin: {                                     // Task
	    unminified: {                                      // Target
	      options: {                                 // Target options
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: {                                   // Dictionary of files
	        'index.html': 'unminified/index.html',     // 'destination': 'source'
	      }
	    }
	},
    uglify: {
      js: {
        src: 'js/perfmatters.js',
        dest: 'js/perfmatters.min.js'
      }
    }, */
    pagespeed: {
	  options: {
	    nokey: true,
	    url: "http://5203484b.ngrok.com/"
	  },
	  prod: {
	    options: {
	      url: "http://5203484b.ngrok.com/",
	      locale: "en_US",
	      strategy: "mobile",
	      threshold: 80
	    }
	  }
	}
  });

//grunt.loadNpmTasks('grunt-contrib-uglify');
//grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-pagespeed');

grunt.registerTask('default', ['pagespeed']);

};