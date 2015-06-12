var fs = require('fs');
var nconf = require('nconf');
var page = require('page');
var state = require('./state');

var configLocation = './config.json';

function init() {
    state.settings.set('connectionString', nconf.get('db:connectionString'));
    state.settings.on('submit-settings', function (event) {
        nconf.set('db:connectionString', state.settings.get('connectionString'));

        // TODO confirm connection works before moving on
        //require('tablespoon').pgsql(nconf.get('db:connectionString'));

        write();
        page('/');
        return false;
    });
}

function write() {
    nconf.save(function (err) {
        fs.readFile(configLocation, function (err, data) {});
    });
}

module.exports = {
    get: function (key) {
        return nconf.get(key);
    },
    init: init,
    load: function () {
        nconf.file({ file: configLocation });
    },
    write: write
};
