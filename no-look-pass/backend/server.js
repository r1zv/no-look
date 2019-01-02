const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const emailRoutes = express.Router();

let Email = require('./email.model')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/emails', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

emailRoutes.route('/').get(function(req, res) {
	Email.find(function(err, emails) {
		if (err) {
			console.log(err);
		} else {
			res.json(emails);
		}
	});
});

emailRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Email.findById(id, function(err, email) {
        res.json(email);
    });
});

emailRoutes.route('/add').post(function(req, res) {
    let email = new Email(req.body);
    email.save()
        .then(email => {
            res.status(200).json({'email': 'email added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new email failed');
        });
});

emailRoutes.route('/update/:id').post(function(req, res) {
    Email.findById(req.params.id, function(err, email) {
        if (!email)
            res.status(404).send("data is not found");
        else
            email.first_name = req.body.first_name;
            email.last_name = req.body.last_name;
            email.email = req.body.email;
            email.consent = req.body.consent;
            email.created_on = req.body.created_on;

            email.save().then(email => {
                res.json('Email updated!' + email);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
app.use('/emails', emailRoutes);
app.listen(PORT, function() {
	console.log("Server is running on Port: " + PORT);	
})