const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello World!");
});

app.get('/:name', (req, res)=>{
    res.send("Hello "+ req.params.name+ "!");
});

app.set('port', ( process.env.PORT || 3000));

app.listen(app.get('port'), ()=>{
    console.log("Server running on port 3000..");
});