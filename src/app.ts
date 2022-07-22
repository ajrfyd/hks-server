// import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import ejs from 'ejs';
import path from 'path';
// import c from 'chalk';
import dotenv from 'dotenv';


const { log } = console;
dotenv.config({
  path: path.join(__dirname, '../.env')
});

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://about-hk.vercel.app',
  ],
  methods: [
    'GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'
  ]  
}));
app.use(express.urlencoded({
  extended: true,
}));

app.set('view engine', 'ejs');
app.set('views', '../views');

const PORT = process.env.PORT || 6000;
// log(c.blue(process.env.PORT));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/test', (req, res) => {
  type Obj = {
    id: number,
    name: string,
    date: string,
  };

  const obj: Obj = {
    id: Math.floor(Math.random() * 10),
    name: 'ajrfyd',
    date: new Date().toLocaleTimeString()
  }

  res.json(obj);
});

app.listen(PORT, () => {
  log(`Server listening on ${PORT}`);
});
