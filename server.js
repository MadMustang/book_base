//Import necessarry packages
import express from 'express';
import bookRoute from './Routes/books';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//Define the express object
const app = express();

//Connect API to database
mongoose.connect("mongodb://aelous:woozie1210@ds131313.mlab.com:31313/book_base");

//Define port
const port = process.env.PORT || 5656;

/*
    The actual Routing of the API
*/

//Starting the server at the predefined port
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

//Implement bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Just as a make sure type of thing
app.get('/', (req,res) => {
    res.json(
        {
            Response: "You should check the documentation"
        }
    )
})

//Routes
app.use('/api/Books', bookRoute);