import express from "express";
import {createUser, genPassword, getUserByName} from "../helper.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const router = express.Router();

//signup

router.post("/signup",async(request,response)=>{
   
    const {username, password} = request.body;
    
    const userFromDB = await getUserByName(username)
    console.log(userFromDB);
    //check for user exist in db
    if(userFromDB){
      response.status(400).send({message:"username already exist"});
      return;
    }

    if(password.length < 8){
        response.status(400).send({message:"password must be longer"});
        return;
    }
    //pattern
    if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%&]).{8,}$/g.test(password)){
        response.status(400).send({message:"password pattern does not match"});
        return;
    }

    const hashedPassword = await genPassword(password);
    const result = await createUser({username,password:hashedPassword});
    response.send(result);
})

//login

router.post("/login",async(request,response)=>{
   
    const {username, password} = request.body;
    
    const userFromDB = await getUserByName(username)
    //check for username
    if(!userFromDB){
      response.status(401).send({message:"invalid credentials"});
      return;
    }

    //if password is match
    const storedPassword = userFromDB.password;

    const isPasswordMatch = await bcrypt.compare(password,storedPassword);
    // console.log(isPasswordMatch);
    
    if(isPasswordMatch){
       const token = jwt.sign({id:userFromDB._id}, process.env.SECRET_KEY)//hide secret key
        response.send({message:"Successful login", token: token})
    }else{
        response.status(401).send({message:"invalid credentials"});
    }
})

export const usersRouter = router;