const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});

const Doctor = mongoose.model('Doctor', DoctorSchema);
module.exports = Doctor;