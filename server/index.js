const express = require('express');
const app = new express();                                          

app.get('/', (_req, res) => {
    res.send(`<h1>Hello world</h1>`);
});

app.listen(8000);
console.log("Server is listenling");