const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

// view engine configuration 
app.set('view engine', 'ejs');

// Static files configuration
app.use(express.static('public'));

// Body parser configuration
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

//Database configuration    
connection
    .authenticate()
    .then(()=>{
        console.log('Database is connected');
}).catch((error)=>{
    console.log('Database is not connected');
});


app.get('/', (req, res) => {
   res.render("index");
});

app.listen(8080, () =>{
    console.log('Server is running on port 8080');
});