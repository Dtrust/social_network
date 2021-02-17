import dotenv from 'dotenv';
dotenv.config();

import './core/db';

import express from 'express';
import { UserCtrl } from './controllers/UserController';
import { PostsCtrl } from './controllers/PostsController'
import { registerValidations } from './validations/register';
import { passport } from './core/passport';
import {createPostValidations} from "./validations/createPost";

const app = express();

app.use(express.json());
app.use(passport.initialize());

/*
  TODO:
  2. Сделать авторизацию через JWT + Passport
  3. Сделать возможность добавлять твиты через авторизованного пользователя
*/

app.get('/users', UserCtrl.index);
app.get('/users/me', passport.authenticate('jwt', {session: false}), UserCtrl.getUserInfo);
app.get('/users/:id', UserCtrl.show);

app.get('/posts', PostsCtrl.index);
app.get('/posts/:id', PostsCtrl.show);
app.post('/posts', passport.authenticate('jwt'), createPostValidations, PostsCtrl.create);
app.patch('/posts/:id', passport.authenticate('jwt'), createPostValidations, PostsCtrl.update);
app.delete('/posts/:id', passport.authenticate('jwt'), PostsCtrl.delete);

app.get('/auth/verify', registerValidations, UserCtrl.verify);
app.post('/auth/register', registerValidations, UserCtrl.create);
app.post('/auth/login', passport.authenticate('local'), UserCtrl.afterLogin);
// app.patch('/users', UserCtrl.update);
// app.delete('/users', UserCtrl.delete);

app.listen(process.env.PORT, (): void => {
  console.log('SERVER IS RUNNING!');
});
