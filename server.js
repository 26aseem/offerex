

//Express and Mongoose
require('dotenv').config();

const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

// ... other imports 
const path = require("path")

const adminauthRoutes = require('./routes/adminauth')
const adminRoutes = require('./routes/admin')
const merchantRoutes = require('./routes/merchant')
const categoryRoutes = require('./routes/category')
const offerRoutes = require('./routes/offer')



const mongoose = require('mongoose');

//Database connection is established
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_hl7dgzkm:kdl12v6vrnq7hkn4svcchgja92@ds133086.mlab.com:33086/heroku_hl7dgzkm",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log("DATABASE CONNECTED")
});

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
///api is added before all 
app.use("/api",adminauthRoutes);
app.use("/api",adminRoutes);
app.use("/api",merchantRoutes);
app.use("/api",categoryRoutes);
app.use("/api",offerRoutes);

//Port for listening
const port = process.env.PORT || 8000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));    
}

//Starting a server
app.listen(port, () => {
    console.log(`WebApp is running... at ${port}`)
});



