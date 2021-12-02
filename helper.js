import { client } from "./index.js";
import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt';
import { usersRouter } from "./routes/users.js";

async function createMovies(filter) {
    return await client
        .db("vinay")
        .collection("movies")
        .find(filter)
        .toArray();
}

 async function postMoviesById(data) {
    return await client.db("vinay").collection("movies").insertMany(data);
}

 async function getMoviesById(id) {
    return await client
        .db("vinay")
        .collection("movies")
        .findOne({ _id: ObjectId(id) });
}

 async function deleteMoviesById(id) {
    return await client
        .db("vinay")
        .collection("movies")
        .deleteOne({ _id: ObjectId(id) });
}

 async function putMoviesById(id, data) {
    return await client
        .db("vinay")
        .collection("movies")
        .updateOne({ _id: ObjectId(id) }, { $set: data });
}

async function genPassword(password){
    const NO_OF_ROUNDS = 10;
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
    console.log(salt);
    const hashedPassword = await bcrypt.hash(password,salt);
    console.log(hashedPassword);
    return hashedPassword;
    }

    //to create users

    async function createUser(data) {
        return await client.db("vinay").collection("user").insertOne(data);
    }

    async function getUserByName(username) {
        return await client.db("vinay").collection("user").findOne({username:username});
    }



export { 
    createMovies, 
    postMoviesById, 
    getMoviesById, 
    deleteMoviesById, 
    putMoviesById,
    genPassword,
    createUser,
    getUserByName
};