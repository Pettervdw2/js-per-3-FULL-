import express from 'express';
import cors from 'cors';
import fs from 'node:fs';

const app = express();
const port = 3000;


app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/yeezy', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/yeezy.json', function (err, data) {
        res.send(data);
    });
});

app.get('/yeezy1', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/yeezy1.json', function (err, data) {
        res.send(data);
    });
});

app.get('/yeezy2', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/yeezy2.json', function (err, data) {
        res.send(data);
    });
});

app.get('/yeezy3', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/yeezy3.json', function (err, data) {
        res.send(data);
    });
});

app.get('/jersey1', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/jerseys1.json', function (err, data) {
        res.send(data);
    });
});

app.get('/jersey2', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/jerseys2.json', function (err, data) {
        res.send(data);
    });
});

app.get('/jersey3', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/jerseys3.json', function (err, data) {
        res.send(data);
    });
});

app.get('/voetbal1', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/voetbal1.json', function (err, data) {
        res.send(data);
    });
});

app.get('/voetbal2', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/voetbal2.json', function (err, data) {
        res.send(data);
    });
});

app.get('/voetbal3', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/voetbal3.json', function (err, data) {
        res.send(data);
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}); 