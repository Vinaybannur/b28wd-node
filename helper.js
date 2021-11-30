import { client } from "./index.js";

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
        .findOne({ id: id });
}

 async function deleteMoviesById(id) {
    return await client
        .db("vinay")
        .collection("movies")
        .deleteOne({ id: id });
}

 async function putMoviesById(id, data) {
    return await client
        .db("vinay")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}

export { createMovies, postMoviesById, getMoviesById, deleteMoviesById, putMoviesById };