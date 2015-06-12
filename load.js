var settings = require('./settings');

var fs = require('fs');
var page = require('page');
var state = require('./state');

function init() {
    state.load.on('submit-load', function (event) {
        var tableName = state.load.get('tableName'),
            files = state.load.get('files');

        var ts = require('tablespoon').pgsql(settings.get('db:connectionString'));

        // TODO delegate to a module that can load URLs, CSVs
        var fileContents = JSON.parse(fs.readFileSync(files[0].path).toString());
        ts.createTable(fileContents, tableName, null, true);

        page('/');
        return false;
    });
}

module.exports = {
    init: init
};
