const Doctor = require("../models/doctors");
const bcrypt = require('bcrypt');

module.exports.register = async function(req, res){
    
    try {
        console.log(req.body);
        const {username, password} = req.body;

    // Hash the password before saving the doctor to the database
    const hashedPassword = await bcrypt.hash(password, 10);
const doctor = new Doctor({
    username,
    password: hashedPassword
});
await doctor.save();


res.send({message: 'Doctor is now registered.'})
    } catch (error) {
    
        res.status(500).send({ error: error.message });
    }


}