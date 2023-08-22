//import library
import express from "express";
import {router} from "./routes/myRouts.js";
import {router2} from "./users/usersRouts.js"
import morgan from "morgan";
// import { write } from "./dal/gettingData.js";
// import axios from 'axios';
const app = express()
//middleware
app.use(morgan("combined"));
app.use(express.json());
app.use("/product", router);
app.use("/users",router2)



//running the file
app.listen(3000, () => {
    // axios.get("https://fakestoreapi.com/products")
    // .then(res => {
    //     const myData = res.data

    //     write(myData);
    // })
    // .catch((error)=>{
    //   console.error('An error accursed',error.message)  
    // });
    console.log("server is running");
});