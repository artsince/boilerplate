'use strict';
require('babel-core/register');

var fs = require('fs');
var koa = require('koa');
var router = require('koa-router')();
var serve = require('koa-static');
var mount = require('koa-mount');

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var _ = require('lodash');

var App = require('./src/index.jsx');

var template = fs.readFileSync('./template.html');

var app = koa();
router.get('/', function* () {
  var rendered = ReactDOMServer.renderToString(React.createElement(App));
  this.body = _.template(template)({ body: rendered });
});

app.use(mount('/dist', serve('./dist')));
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);



