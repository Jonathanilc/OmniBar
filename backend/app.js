const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const fileJs = fs.readFileSync('file.js');

app.get('/', (req, res)=>res.send('Hello World!'))

app.get('/api/file.js', (req, res)=>{
    const key = req.query.key;
    const out = fileJs.toString().replace('API_KEY_CONST', key);
    res.setHeader('content-type', 'text/javascript')
    res.write(out);
    res.end();
})

app.listen(port, ()=>console.log(`Example app listening on port ${port}!`))