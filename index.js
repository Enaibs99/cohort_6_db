//import express
const express = require('express');

//cors - allows information to be shared between different domains(cross-origin resource sharing)
const cors = require('cors');
//mongoose - object data modeling (ODM) library for MongoDB and Node.js
const mongoose = require('mongoose');
const router = require('./routes/userRoutes');

const live_url = 
   "mongodb+srv://Enaibs99:OgheneTejiri99@cluster0.opgq0tl.mongodb.net/UserDB?appName=Cluster0"
const local_url = "mongodb://localhost:27017/userDB";

mongoose.connect(live_url)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("Connection Error: ", err));    


//create express app
const app = express();
const port = 8888;
app.use(cors());
app.use(express.json());

//use routes
app.use("/api", router);

app.get('/', (req, res) => {
    res.send("api is ready for use");
});

app.get('/test', (req, res) => {
    res.send("Test endpoint is working");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});