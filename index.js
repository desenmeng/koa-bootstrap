/**
 * Created by mdemo on 14/11/5.
 */

var rd = require('rd');
var path = require('path');
var strip = require('strip-path');
var Router = require('koa-router');
var mount = require('koa-mount');
var dirname = path.dirname(require.main.filename);

var bootstrap = function(app, dir){
    var routers = dir || 'routers';
    var dirs = rd.readDirSync(path.join(dirname , routers));
    dirs.forEach(function(dir){
        var base = '/' + strip(dir,routers);
        var router = require(path.join(dirname,routers, base))(new Router());
        app.use(mount(base, router.middleware()));
    });
};

module.exports = bootstrap;