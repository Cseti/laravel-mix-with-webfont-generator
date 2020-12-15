let mix = require('laravel-mix');

mix
    .scripts([
        'src/js/custom/main.js'
    ], 'dist/js/build.js')
    .sass('src/scss/style.scss', 'css')
    .options({
        autoprefixer: {
            options: {
                browsers: [
                    'last 6 versions',
                ]
            }
        }
    })
    .minify('dist/css/style.css')
    .minify('dist/js/build.js')
    .browserSync({
        proxy: 'http://sitebuilder-template.local/',
        files: [
            'dist/js/**/*.js',
            'dist/css/**/*.css',
            'dist/**/*.php'
        ],
    })
    .autoload({
        jquery: ['$', 'window.jQuery']
    })
    .setPublicPath('dist')
    .sourceMaps()
    .version();
