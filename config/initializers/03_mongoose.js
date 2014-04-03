var mongoose = require('mongoose');

module.exports = function() {
  switch (this.env) {
    case 'development':
    var options = {
        db: { native_parser: true },
        server: { poolSize: 5 },
        user: 'root',
        pass: '123456'
    };
      mongoose.connect('mongodb://epbyminw3602.minsk.epam.com/testDb', options);
      break;
    case 'production':
      mongoose.connect('mongodb://mongodb.example.com/prod');
      break;
  }

}