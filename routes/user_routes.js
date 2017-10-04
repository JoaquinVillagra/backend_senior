module.exports = function(app) {

  var userShow  = require('../models/user.js');

  findAlluser = function(req, res) {
  	userShow.find(function(err, users) {
  		if(!err) {
        console.log('GET /users')
  			res.send(users);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  findById = function(req, res) {
  	userShow.findById(req.params.id, function(err, user) {
  		if(!err) {
        console.log('GET /user/' + req.params.id);
  			res.send(user);
  		} else {
  			var data = [];
        res.send(data);
  		}
  	});
  };

  adduser = function(req, res) {
  	var user = new userShow({
      username   : req.body.username,
      correo     : req.body.correo,
      password   : req.body.password,
      token      : Math.random().toString(36).substr(2)
  	});

  	user.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  	res.send(user);
  };

  //PUT - Update a register already exists
  updateuser = function(req, res) {
  	userShow.findById(req.params.id, function(err, user) {
      username  = req.body.username;
      correo    = req.body.correo;
      password  = req.body.password;
      token     = user.token;
  		user.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(user);
  		});
  	});
  }

  deleteuser = function(req, res) {
  	userShow.findById(req.params.id, function(err, user) {
  		user.remove(function(err) {
  			if(!err) {
  				console.log('Eliminado');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/users', findAlluser);
  app.get('/user/:id', findById);
  app.post('/user', adduser);
  app.put('/user/:id', updateuser);
  app.delete('/user/:id', deleteuser);
}