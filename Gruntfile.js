'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      compass: {
        files: [
          'sass/**/*'
        ],
        tasks: ['compass:server']
      }
    },
    compass: {
      options: {
        sassDir: 'sass',
        cssDir: 'assets/css',
        generatedImagesDir: '.tmp/img/generated',
        imagesDir: 'img',
        javascriptsDir: 'js',
        importPath: 'components',
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        relativeAssets: true,
        outputStyle: 'compressed',
        noLineComments: true,
        specify: [
          'sass/boot.scss'
        ]
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    }
  });

  grunt.registerTask('default', function (target) {
    grunt.task.run([
      'watch'
    ]);
  });

  grunt.registerTask('sass:build', function(target){
    grunt.task.run([
      'compass:server'
    ]);
  });

};
