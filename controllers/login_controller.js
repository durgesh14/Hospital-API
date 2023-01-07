const Doctor = require("../models/doctors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: './etc/.env'});



module.exports.docLogin= async function(req, res){
    try {
        const {username, password} = req.body;

    const doctor = await Doctor.findOne({username});

    if(!doctor) 
    res.status(404).send({error: 'User not found'});

    const isPasswordCorrrect =  bcrypt.compare(password, doctor.password);
    if(!isPasswordCorrrect){
        res.status(401).send({error: 'Invalid Username/Password'});
    }

    const token = jwt.sign({id: doctor._id}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    } );
    res.send({token});
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}