/*
    Creating the models required for the database.
    We need this so that the database has a format.
*/

//Importing the the MongoDB package
import mongoose from 'mongoose';

//Creating a Schema object
const Schema = mongoose.Schema;

//Making the book model
const bookModel = new Schema({
    title: {type: String},
    author: {type: String}
});

//Export the model including it's collection
//Requires collection and schema
export default mongoose.model('books', bookModel);