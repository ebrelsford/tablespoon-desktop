var settings = require('./settings');

var _ = require('underscore');

var state = require('./state');

function init() {
    state.query.on('submit-query', function (event) {
        var ts = require('tablespoon').pgsql(settings.get('db:connectionString'));

        var input = state.query.get('query');
        try {
            ts.query(input, function(result){
                console.log(JSON.stringify(result));
                state.query.set('results', result);
                state.query.set('columns', _.keys(result.rows[0]));
            })
        }
        catch (e) {
            state.query.set('error', e.toString());
            console.error(e);
            console.error(e.stack);
        }
        return false;
    });
}

module.exports = {
    init: init
};
