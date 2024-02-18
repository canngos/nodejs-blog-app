const mongoose = require('mongoose');
const Schema = mongoose.Schema; // constructor function

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true }); // this will add a timestamp to the blog. It will add a createdAt and updatedAt field

// model is for communicating with the database. Just like repository in Java
const Blog = mongoose.model('Blog', blogSchema); // this will create a model based on the schema

module.exports = Blog; // this will export the model so that it can be used in other files