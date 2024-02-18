// express used to create server
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// connect to mongodb
const dbURI = "mongodb+srv://canngos:6eVI90NI1u3Ihnnn@nodejs-course.raeqdev.mongodb.net/nodejs-course?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then((result) => app.listen(8080)) // if db connection is successful, open port 8080
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public')); // this will serve static files from the public folder
app.use(express.urlencoded({ extended: true })); // this will parse url encoded data

// endpoints
app.get('/', (req, res) => {
    res.redirect('/blogs');
});


app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});