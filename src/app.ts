import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import c from 'chalk';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { readDb } from './db/dbController.js'

import wordleRoute from './routes/wordle.js';
import userRoute from './routes/user.js';
import contentsRoute from './routes/contents.js';

import resolvers from './resolvers/index.js';
import schema from './schema/index.js';

const { log } = console;

// dotenv.config({
//   path: path.join(__dirname, '../.env')
// });

dotenv.config({
  path: path.resolve('../.env')
})

// const app = express();

// app.use(cors({
//   origin: [
//     'http://localhost:3000',
//     'https://about-hk.vercel.app',
//   ],
//   methods: [
//     'GET', 
//     'POST', 
//     'DELETE', 
//     'PUT', 
//     'PATCH', 
//     'OPTIONS'
//   ]  
// }));

// app.use(express.urlencoded({
//   extended: true,
// }));



// app.set('view engine', 'ejs');
// app.set('views', '../views');

// const PORT = process.env.PORT || 6000;

// app.get('/', (req, res) => {
//   res.render('index');
// });

// const routes = [...wordleRoute, ...userRoute, ...contentsRoute];
// routes.forEach(({ method, route, handler}) => {
//   app[method](route, handler);
// });

// ? deprecated
// wordleRoute.forEach(({ method, route, handler }) => {
//   app[method](route, handler);
// });

// userRoute.forEach(({ method, route, handler}) => {
//   app[method](route, handler);
// });

// contentsRoute.forEach(({ method, route, handler }) => {
//   app[method](route, handler);
// });

// app.get('/*', (req, res) => {
//   res.send('Not Found');
// });

// app.listen(PORT, () => {
//   log(c.red(`Server listening on ${PORT}`));
// });


//! ---------------------------------------------

const PORT = process.env.PORT || 6000;

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    db: {
      users: readDb('user'),
      contents: readDb('contents')
    }
  },
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', '../views');

await server.start();

server.applyMiddleware({
  app,
  path: '/graphql',
  cors: {
    origin: [
          'http://localhost:3000',
          'https://about-hk.vercel.app',
          'https://studio.apollographql.com',
        ],
    credentials: true,
  }
})

app.get('/', (req: Request, res: Response) => {
  res.render('index');
})

await app.listen({ port: PORT });
log(c.red(`Server Listening on ${PORT}`));