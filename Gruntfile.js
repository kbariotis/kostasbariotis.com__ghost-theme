'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    watch: {
      compass: {
        files: [
          'sass/**/*'
        ],
        tasks: ['compass:server']
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      server: {
        files: {
          'assets/css/boot.css': 'sass/boot.scss'
        }
      }
    }
  });

  grunt.registerTask('default', ['watch']);

  grunt.registerTask('sass:build', ['sass:server']);

};
