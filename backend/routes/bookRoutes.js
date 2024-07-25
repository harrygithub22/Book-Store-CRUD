import express from "express";
import 
{   getAllBooks,
    addBook,
    updateBook,
    getBook,
    removeBook }
 from "../controllers/bookController.js"


const bookRoutes = express.Router();

// bookRoutes.get('/',getAllBooks)
// bookRoutes.post("/",addBook)

bookRoutes.route("/").get(getAllBooks).post(addBook)

// bookRoutes.put("/:id",updateBook)
// bookRoutes.get("/:id",getBook)
// bookRoutes.delete("/:id",deleteBook)

bookRoutes.route("/:id").put(updateBook).get(getBook).delete(removeBook)


export default bookRoutes