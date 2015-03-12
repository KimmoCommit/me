module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
                src: [
            'javascripts/*.js', // All JS in the libs folder
            'javascripts/bootstrap/*.js'
            ],
            dest: 'build/production.js',
        }


    },

    uglify: {
        build: {
            src: 'build/production.js',
            dest: 'build/production.min.js'
        }
    },

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['**/*.{png,jpg,gif,jpeg}'],
                dest: 'build/'
            }]
        }
    },


    sass: {
        dist: {
            options:{
                style: 'compressed'
            },
            files: {
                'build/styles.css': 'sass/styles.scss'
            }
        } 
    },



    watch: {
       options: {
        livereload: true,
    },
    css: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
            spawn: false,
        }
    },
    scripts: {
        files: ['javascripts/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },

    } 
}





});

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'watch', 'sass']);

    // 5. minify-plugin
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 6. Optimaze images
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 7. watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 8. sass
    grunt.loadNpmTasks('grunt-sass');


};
