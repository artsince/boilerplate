'use strict';
require('babel-core/register');

var fs = require('fs');
var path = require('path');
var express = require('express');
var morgan = require('morgan');

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var _ = require('lodash');

var App = require('../src/index.jsx');

var layout = _.template(fs.readFileSync(path.join(__dirname,'views/template.html')));

var app = express();
app.use(morgan('dev'));
app.use('/dist', express.static('../dist'));

app.get('*', (req, res) => {
  let status = 200;
  let rendered = ReactDOMServer.renderToString(React.createElement(App));
  let htmlContent = layout({
    body: rendered
  });
  res.status(status).send(htmlContent);
});

app.listen(3000);



