'use strict';

// node moduleの読み込み
const path = require('path');
const fractal = module.exports = require('@frctl/fractal').create();

// タイトル
fractal.set('project.title', 'My Fractal');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, '/src/components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, '/src/docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, '/src/public'));

/* 静的ファイルの書き出し場所 */
fractal.web.set('builder.dest', __dirname + '/docs');
