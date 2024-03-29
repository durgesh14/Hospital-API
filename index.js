const express = require('express');

const app = express();
const port = process.env.PORT || 8000;



const db = require('./config/mongoose');

app.use(express.urlencoded());


//Use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})
