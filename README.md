<img src="logo.png" width="200">

Mantis Starter
==============

> A modern kick-starter for front-end development packed with well-chosen tools


Get started
-----------

First of all, you need to have installed [Node.js](http://nodejs.org/) and [Gulp](http://gulpjs.com) globally.
Then you can install by running the following command in your terminal:

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/acauamontiel/mantis-starter/master/install.sh)"
```

Otherwise you can install *"manually"* doing the following steps:

- Clone the repo: `git clone git@github.com:acauamontiel/mantis-starter.git my-project`
- Enter the folder: `cd my-project`
- Install Node dependencies: `npm install`
- Finally install Bower components: `bower install`

But I recommend you to install the easiest way.


Running
-------

You can run the app locally by [Gulp](http://gulpjs.com)

### Available Gulp commands

#### Default - `gulp` or `npm start`

Run `gulp` to compile and watch files running on [localhost:3000](http://localhost:3000)


#### Build - `gulp build` or `npm run build`

Run `gulp build` to only compile files


#### Clean - `gulp clean` or `npm run clean`

Run `gulp clean` to delete the `public/` folder (same as `rm -rf build`)


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
├── js/
│   ├── app/
│   │   ├── index.js
│   │   └── *.js
│   ├── modules/
│   │   └── *.js
│   └── app.js
└── gulpfile.babel.js/
    ├── tasks/
    │   └── *.js
    ├── index.js
    └── paths.js
.babelrc
.bowerrc
.editorconfig
.env
.eslintrc
.gitattributes
.gitignore
bower.json
content.json
logo.png
logo.svg
package.json
README.md
```


License
-------

© 2016 - 2019 [Acauã Montiel](http://acauamontiel.com.br)

[MIT License](http://acaua.mit-license.org/)
