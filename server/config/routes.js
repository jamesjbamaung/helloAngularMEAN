//this exports routes
module.exports = function (app) {
    app.get('/', function (request, response) {
        quotes.index(request, response);
    });
};