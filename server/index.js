import express from 'express';
import cors from 'cors';
import fs from 'node:fs';

const app = express();
const port = 3000;


app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/test.json', function (err, data) {
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}); 