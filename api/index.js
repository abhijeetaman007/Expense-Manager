const express = require('express');
const cors = require('cors');

const app = express();
const Routes = require('./routes/index');
const path = require('path');

const connectMongo = require('./config/mongo.js');
connectMongo();

const port = 5000;

app.use(cors({ origin: '*' }));
app.use(express.json({ extended: false }));

app.get('/test', (req, res) => {
    return res.send({ success: true, data: 'Test Route' });
});
//Use Routes
app.use('/api', Routes);

//Set static folder
app.use(express.static(path.join(__dirname, '../', 'build')));
// send index.html from build
app.get('/', (req, res) => {
    console.log(path.join(__dirname, '../', 'build'));
    return res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});

console.log('hello');

app.listen(port, () => console.log(`Listening on port ${port}`));
