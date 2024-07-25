import { bookModel } from "../models/bookModel.js"
import {StatusCodes} from "http-status-codes"

export const getAllBooks = async(req,res)=>{
    // await res.send("Show all books")
    try {
            const books = await bookModel.find()
            res.status(StatusCodes.OK).json({length: books.length, data:books}) 
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:" Server error"}) 
    }
}
export const getBook = async(req,res)=>{
    const id= req.param("id")
    const book = await bookModel.findById(id)
    if (book) return res.status(StatusCodes.OK).json({book, msg:"Book found!"})
    return res.status(StatusCodes.NOT_FOUND).json({msg:`No book found with id ${id}`})

    // res.send("Get a book")
}
export const updateBook =  async(req,res)=>{
try {
        const{id}=req.params
        const newBook= await bookModel.findByIdAndUpdate(id,req.body,{new:true,}
            // {returnDocument :"after"}
        )
        res.status(200).json(newBook);
        
} catch (error) {
    res.status(500).json({error})
    
}

}
export const removeBook = async(req,res)=>{
try {
        const {id} =req.params
        // findByIdAndDelete will return deleted record as json object
        // const deleteBook =await bookModel.findByIdAndDelete(id)
        const deleteBook= await bookModel.deleteOne({_id:id})
        // deleteOne will return json object with{ ack: true/false}
        if(deleteBook.deletedCount)
            return res.status(200).json({msg: "Book Deleted successfully",deleteBook})
        else
            res.status(400).json({ msg:`book with id ${id} not found`})
        
} catch (error) {
    res.status(500).json({error});
    
}

}
export const addBook = async(req,res)=>{
    try {
            await bookModel.create(req.body)
            // res.send("Add a book")
            res.status(StatusCodes.OK).json({msg:"Book added successfully"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:" Server error"})
        
    }
}

