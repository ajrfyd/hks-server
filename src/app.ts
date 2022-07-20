import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import ejs from 'ejs';

dotenv.config({
  path: path.join(__dirname, '../.env')
});

const app = express();

app.use(cors());
app.use(express.urlencoded({
  extended: true,
}));

app.set('view engine', 'ejs');
app.set('views', '../views');


const PORT = process.env.PORT || 6000;

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});