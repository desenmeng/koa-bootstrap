/**
 * Created by mdemo on 14/11/13.
 */
var koa = require('koa');
var bootstrap = require('..');
var app = koa();

app.use(bootstrap());

app.listen(3002);
