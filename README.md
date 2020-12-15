Sitebuilder template
===================
Run `yarn` for install dependencies.

VHOST
-------------
Create a vhost, set document root to the `/dist` folder, the vhost name should be `sidebuilder-template.local`. If you
change the vhost domain don't forget to change it in the `webpack.mix.js` file also for browser sync.

Webpack
-------------
Tasks:

- compile scss,
- autoprefixer
- borwser sync / live reload
- svg webfont generator
- uglify js
- versioning css/js

**Svg webfont generator**
Generate wenfotn from svg icons. The generator create classes and provide a scss mixin. The class name convention follow
the BEM rules, the file name will be the modifier.

* Use as class: `<i class="icon icon--file-name></i>`
* Use with scss mixin: `@include icon('file-name');`

Available tasks
-------------
**yarn watch**: run all tasks and watch files changes

**yarn dev**: run all task once in developer mode

**yarn prod**: run all task once in production mode

**yarn svg-icons**: generate webfonts from `/src/svg-icons` folder.
