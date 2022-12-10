import app from "./app.js";
import * as dotenv from  "dotenv";
import connectDatabase from "./config/database.js";


//config env
// note this line is also setting env for mongodb

dotenv.config({path : "Backend/config/config.env"});


// data base connection
connectDatabase()

app.listen(process.env.PORT, ()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`)
})