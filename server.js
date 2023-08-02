
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config();

const port = process.env.PORT;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(req.headers)
    res.status(200).send("Hello World!");
})

app.use('/api', require('./routes/index'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:/${port}`)
});