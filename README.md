<img src="logo.png" width="200">

Mantis Starter
==============

> A modern kick-starter for front-end development packed with well-chosen tools


Get started
-----------

First of all, you need to have installed [Node.js](http://nodejs.org/) and [Gulp](http://gulpjs.com) globally.
Then you can install by running the following command in your terminal:

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/mantis-stack/mantis-starter/master/install.sh)"
```

Otherwise you can install *"manually"* doing the following steps:

- Clone the repo: `git clone git@github.com:mantis-stack/mantis-starter.git my-project`
- Enter the folder: `cd my-project`
- Install Node dependencies: `npm install`
- Finally install Bower components: `bower install`

But I recommend you to install the easiest way.


Running
-------

You can run the app locally by [Gulp](http://gulpjs.com)

### Available Gulp commands

#### Default - `gulp`

Run `gulp` to compile and watch files running on [localhost:3000](http://localhost:3000)


#### Build - `gulp build`

Run `gulp build` to only compile files


#### Dist - `gulp dist`

Run `gulp dist` to compile, optimize and minify files


#### Clean - `gulp clean`

Run `gulp clean` to delete the `build/` folder (same as `rm -rf build`)


Structure
---------

When you have all installed, the structure will look like this:

```
node_modules/
src/
├── dependencies/
├── copy/
│   ├── fonts/
│   │   └── *.{eot|svg|ttf|woff}
│   ├── **/*
├── css/
│   ├── components/
│   │   └── *.styl
│   ├── core/
│   │   └── *.styl
│   └── style.styl
├── fonts/
│   └── *.{eot|svg|ttf|woff}
├── html/
│   ├── incs/
│   │   └── *.jade
│   ├── layouts/
│   │   └── *.jade
│   └── index.jade
├── img/
│   ├── backgrounds/
│   │   └── *.{jpg|png|svg}
│   ├── favicons/
│   │   └── *.{png|svg}
│   ├── sprite/
│   │   └── *.svg
│   └── *.{jpg|png|svg}
└── js/
    ├── app/
    │   ├── index.js
    │   └── *.js
    ├── modules/
    │   └── *.js
    └── app.js
.babelrc
.bowerrc
.editorconfig
.eslintrc
.gitattributes
.gitignore
bower.json
content.json
gulpfile.babel.js
gulpfile.paths.js
logo.png
logo.svg
package.json
README.md
```


License
-------

© 2016 - 2017 [Acauã Montiel](http://acauamontiel.com.br)

[MIT License](http://acaua.mit-license.org/)
