'use strict';

module.exports = function(grunt) {

  // Configuración 
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  docco: {
      debug: {
      src: ['*.js'],
      options: {
          output: 'docs/'
      }
      }
  }
  });

  // Carga el plugin de grunt 
  grunt.loadNpmTasks('grunt-docco');

  // generar la documentación
  grunt.registerTask('default', ['docco']);
};
