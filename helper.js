import { client } from "./index.js";
import { ObjectId } from "mongodb";

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

export { createMovies, postMoviesById, getMoviesById, deleteMoviesById, putMoviesById };