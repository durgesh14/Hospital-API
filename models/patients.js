const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },

    reports:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report'
    }]

});
   

const Patient = mongoose.model('Patient', PatientSchema);
module.exports = Patient;