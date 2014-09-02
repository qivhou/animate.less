/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    autoprefixer: {
        options: {
            browers: ['last 3 versions', 'bb 10', 'android 3']
        },
        no_dest: {
            src : 'css/animate.css'
        }
    },
    cssmin: {
        minify: {
            src: ['css/animate.css'],
            dest: 'css/animate.min.css'
        }
    },
    watch: {
        less: {
            files: ['less/**/*'],
            tasks: ['less']
        }
    },
    less: {
        compile :{
            files : {
                'css/animate.css' : ['less/animate.less']
            }
        }
    },
    clean: {
        build : ['css']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task.
  grunt.registerTask('default', 'watch');
  grunt.registerTask('build', ['clean', 'less', 'autoprefixer', 'cssmin']);
};
