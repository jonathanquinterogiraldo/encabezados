const express = require('express');
const app = express();   
const browser = require('browser-detect');

app.get('/', (req, res) => {
const result = browser(req.headers['user-agent']);
res.send(`<h1> ${result.name} </h1>`);    
});

app.listen(3000, () => console.log('Listening on port 3000!'));
