module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ''
      },
      js: {
        src: ['src/files/js/vendor/*.js','src/js/*.js'],
        dest: 'out/js/_main.js'
      },
      css: {
        src: ['src/files/css/*.css','out/css/root.css','out/css/lists.css','out/css/post.css','out/css/project.css'],
        dest: 'out/css/_main.css'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'out/js/_main.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  //grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['concat', 'uglify']);

};