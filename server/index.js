const express = require("express")
const dotenv = require("dotenv")
dotenv.config({path:'./config.env'})
require('./database/dbConnection');
const cors = require("cors")

const app = express()
app.use(express.json());
app.use(cors());

//Middleware
const routes = require('./controllers/index');
app.use('/', routes);



app.get("/", function(req,res) {
    res.send("Hello Vikash")
})

//Port 
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`)
})
