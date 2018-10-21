//Import the packages
import express from 'express';
import Book from '../Models/bookModels';

//Router objext
const bookRouter = express.Router();

//Making routes
bookRouter.route('/')
    //Getting all books
    .get((req, res) => {
        //Display
        Book.find({}, (err, books) => {
            res.json(books);
        })
    })
    //Making new book entry
    .post((req, res) => {
        let book = new Book(req.body);
        book.save();
        res.status(201).send(book);
    })

//Middleware
bookRouter.use('/:bookId', (req, res, next) => {
    Book.findById(req.params.bookId, (err, book) => {
        if(err)
            res.status(500).send(err)
        else {
            req.book = book;
            next();
        }
    })
})

//Book by ID
bookRouter.route('/:bookId')
    //Getting a book by ID
    .get((req, res) => {
        res.json(req.book);
    })
    //Updating a single book
    .put((req, res) => {
        req.book.title = req.body.title;
        req.book.author = req.body.author;
        req.book.save();
        res.json(req.book);
    })
    //Edit a specific property from a book
    .patch((req, res) => {
        if(req.body._id){
            delete req.body._id;
        }
        for( let p in req.body ){
            req.book[p] = req.body[p]
        }
        req.book.save();
        res.json(req.book);
    })
    //Removing a book from index
    .delete((req, res) => {
        req.book.remove(err => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(204).send('removed')
            }
        })
    })

export default bookRouter;