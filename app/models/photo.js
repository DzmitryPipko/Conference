var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PhotoSchema = new Schema({
    name: String,
    url: String
});


module.exports = mongoose.model('photo', PhotoSchema);