const express = require('express');
const app = express();

app.get('/round', (req, res) => {res.send('Root route')});
app.get('/about', (req, res) => {res.send('About route')});
app.get('/contact', (req, res) => {res.send('Contact route')});
app.get(/.*fly$/, (req, res) => {res.send('Route ending in fly')});

app.listen(3000, () => {console.log("Listening on port 3000")});