import express from 'express'
import { connect } from './config/database.js';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js'
import Cors from 'cors'

const app= express();
app.use(Cors());

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',apiRoutes)

import user from './models/user-model.js';
import UserRepository from './repository/userrepo.js';
app.listen(7000,async ()=>{
    console.log('App started at PORT 7000');
    await connect();
   console.log("Database Connected");
   const data={
    email:"temp21@gmail.com",
    password:"r332",
    name:"nikhil"
   }
//   await user.create(data)
//    console.log("created user");

//    const userrepo= new UserRepository()
//    await userrepo.create(data)
//    console.log("created user");

})