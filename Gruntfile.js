module.exports = function(grunt) {
  grunt.initConfig({
    banner: '/* <%= pkg.name %> <%= pkg.version %> \n' + '* By <%= pkg.author %> \n' + '* Distributed under <%= pkg.license %> \n' + '* Copyrights <%= grunt.template.today("yyyy") %> . All Rights Reserved */\n',
    pkg: grunt.file.readJSON('./package.json'),
    jshint: {
      options: {
        ignores: ['./node_modules', './public/bower_components/**/*.js', './**/*.min.js'],
        jshintrc: '.jshintrc'
      },
      gruntfile: 'Gruntfile.js',
      all: ['routes/**/*.js', 'public/**/*.js', 'app.js']
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        mangle: {
          except: ['jQuery', '$']
        }
      },
      my_target: {
        files: {}
      }
    },
    less: {
      options: {
        paths: ['./public/less']
      },
      dev: {
        files: {
          './public/css/style.css': './public/less/style.less'
        }
      },
      production: {
        options: {
          yuicompress: true
        }
      }
    },
    cssmin: {
      options: {
        banner: '<%= banner %>'
      },
      dev: {
        files: {
          './public/css/style.min.css': ['./public/bower_components/normalize-css/normalize.css', './public/css/style.css']
        }
      },
      production: {
        files: {}
      }
    },
    imagemin: {
      options: {
        optimizationLevel: 3,
        files: {}
      }
    },
    nodemon: {
      options: {
        file: 'app.js',
        // put args here
        // the same as running
        // node app [args]
        args: [],
        legacyWatch: true,
        ignoredFiles: ['./node_modules/**', './public/**'],
        watchedExtensions: ['js'],
        watchedFolder: ['routes'],
        env: {
          PORT: 3000,
          NODE_ENV: 'development'
        }
      },
      server: {
        options: {
          // your server config
          // check https://github.com/ChrisWren/grunt-nodemon for more information on configuration
          // args: ['development']
        }
      },
      debug: {
        options: {
          nodeArgs: ['--debug'] // you can use --debug-brk
        }
      }
    },
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile'],
      },
      scripts: {
        // watch changes for public files
        files: ['!**/node_modules/**', './public/**/*.js'],
        options: {
          livereload: 3355
        },
        tasks: ['jshint', 'uglify']
      },
      less: {
        files: ['!**/node_modules/**', './**/*less' ],
        tasks: ['less']
      },
      css: {
        files: ['!**/node_modules/**', './public/**/*.css'],
        options: {
          livereload: 3355
        },
        tasks: ['cssmin']
      },
      jade: {
        files: ['!**/node_modules/**',  './views/**/*.jade'],
        options: {
          events: ['all'],
          livereload: 3355
        }
      },
      livereload: {
        options: {
          livereload: true
        },
        files: './public/less/**/*',
        tasks: ['cssmin']
      }
    },
    // concurrent task
    // see https://github.com/sindresorhus/grunt-concurrent for more information on setup
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      server: {
        tasks: ['nodemon:server', 'watch']
      },
      debug: {
        tasks: ['nodemon:debug', 'watch']
      }
    }
  });
  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  // default tasks
  grunt.registerTask('default', ['jshint', 'uglify', 'imagemin',  'less',  'cssmin:dev', 'concurrent:server']);
  // server task
  grunt.registerTask('server', ['concurrent:server']);
  // to use the debug task, install node-inspector
  // in a terminal run node-inspector
  // check out grunt-node-inspector: https://github.com/ChrisWren/grunt-node-inspector to use the grunt task
  grunt.registerTask('debug', ['concurrent:debug']);
  // grunt.registerTask('production', ['uglify:production','less:production', 'cssmin:production']);
  // your test over here
  // grunt.registerTask('test', []);
};
