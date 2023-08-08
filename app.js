const express = require('express');
require('dotenv').config();

const app = express();

const port = 8000;

app.get('/', (req, res) => {
    const a = process.env.OPENAI_API_KEY;
    console.log(a);
    res.send(process.env.OPENAI_API_KEY);
});

app.listen(port, () => {
    console.log('listening on port');
})



