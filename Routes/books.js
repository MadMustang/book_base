import express from 'express';

const bookRouter = express.Router();

bookRouter
    .get('/', (req, res) => {
        
        //JSON response
        res.json(
            [
                {
                    id: 1,
                    title: "Alice's Adventures in Wonderland",
                    author: "Charles Lutwidge Dodgson",
                },
                {
                    id:2,
                    title: "Einstein's Dreams",
                    author: "Alan Lightman",
                }
            ]
        )
    })

export default bookRouter;