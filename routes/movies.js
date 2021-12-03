import express from "express";
import{ createMovies, postMoviesById, getMoviesById, deleteMoviesById, putMoviesById } from "../helper.js"
import { auth } from "../middleware/auth.js";

const router = express.Router();


router.get("/",auth,async(request,response)=>{
    //request query params
    console.log(request.query);
    // const {language,rating} = request.query;
    const filter = request.query;
    console.log(filter);
    // let filtermovies = movies
    // if(language){
    //     filtermovies = filtermovies.filter((mv)=>mv.language==language);
    // }
    // if(rating){
    //     filtermovies = filtermovies.filter((mv)=>mv.rating == +rating);
    // }
    if(filter.rating){
        filter.rating = +filter.rating;
    }

    // db.movies.find({})
   const filtermovies = await createMovies(filter);//cursor to array
   //cursor is pagination 1 2 3 4 5 next
    response.send(filtermovies);
});
 
router.post("/",auth,async(request,response)=>{
    const data = request.body;
    //create movies - db.movies.insertMany(data)
    const result = await postMoviesById(data);
    response.send(result);
})

router.get("/:id",auth,async(request,response)=>{
    console.log(request.params);
    const {id} = request.params;
 const movie = await getMoviesById(id);
     console.log(movie);
    // const movie = movies.find((mv)=>mv.id==id);
   movie ? response.send(movie): response.status(404).send({message:"No matching movie found"})
});

router.delete("/:id",auth,async(request,response)=>{
    console.log(request.params);
    const {id} = request.params;
 const result = await deleteMoviesById(id);
     
   result.deletedCount>0
   ? response.send(result)
   : response.status(404).send({message:"No matching movie found"});
});

router.put("/:id",auth,async(request,response)=>{
    console.log(request.params);
    const {id} = request.params;
    const data = request.body;
 const result = await putMoviesById(id, data);
 const movie = await getMoviesById(id);
     response.send(movie);
//    result.deletedCount>0
//    ? response.send(result)
//    : response.status(404).send({message:"No matching movie found"});
});

export const moviesRouter = router;