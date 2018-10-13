//Import necessarry packages
import express from 'express';
import bookRoute from './Routes/books'

//Define the express object
const app = express();

//Define port
const port = process.env.PORT || 5656;

/*
    The actual Routing of the API
*/

//Starting the server at the predefined port
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

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