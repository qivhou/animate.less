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
            options: {
                livereload: true
            },
            files: ['less/**/*'],
            tasks: ['less', 'autoprefixer', 'copy']
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
    },
    copy : {
        demo : {
            src: "css/animate.css",
            dest: "demo/animate.css"
        }
    },
    connect : {
        server: {
            options: {
                port: 9001,
                base:'demo',
                keepalive: true
            }
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default', 'watch');
  grunt.registerTask('build', ['clean', 'less', 'autoprefixer', 'cssmin']);
  grunt.registerTask('server', ['connect']);
};
