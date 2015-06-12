var fs = require('fs');
var ipc = require('ipc');
var Ractive = require('ractive');
var page = require('page');
var state = require('./state');
require('./settings').load();

Ractive.debug = true;

var templates = {
    load: fs.readFileSync(__dirname + '/templates/load.tmpl').toString(),
    query: fs.readFileSync(__dirname + '/templates/query.tmpl').toString(),
    settings: fs.readFileSync(__dirname + '/templates/settings.tmpl').toString()
};

var routes = {
    load: function load (ctx, next) {
        ctx.template = templates.load;
        state.load = render(ctx);
        require('./load').init();
    },
    query: function query (ctx, next) {
        ctx.template = templates.query;
        state.query = render(ctx);
        require('./query').init();
    },
    settings: function settings (ctx, next) {
        ctx.template = templates.settings;
        state.settings = render(ctx);
        require('./settings').init();
    }
};

page('/', routes.query);
page('/load', routes.load);
page('/settings', routes.settings);
page.start();
page('/');

function render(ctx) {
    var ract = new Ractive({
        el: '#container',
        template: ctx.template,
        data: ctx.data
    });
    return ract;
}
