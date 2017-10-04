var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var user = new Schema({
	username: 		{ type: String  },
	correo: 		{ type: String  },
	password: 		{ type: String  },
	token:          { type: String  }
}, {collection: 'usuarios', versionKey: false});

module.exports = mongoose.model('user', user);

