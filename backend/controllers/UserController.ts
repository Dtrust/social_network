import express from 'express';
import jwt from 'jsonwebtoken';

import { validationResult } from 'express-validator';
import { UserModel, UserModelInterface, UserModelDocumentInterface } from '../models/UserModel';
import { generateMD5 } from '../utils/generateHash';
import { sendEmail } from '../utils/sendEmail';
import { isValidObjectId } from '../utils/isValidObjectId';

class UserController {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find({}).exec();

      res.json({
        status: 'success',
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }
  }

  async show(req: any, res: express.Response): Promise<void> {
    try {
      const userId = req.params.id;

      if (!isValidObjectId(userId)) {
        res.status(400).send();
        return;
      }

      const user = await UserModel.findById(userId).exec();

      if (!user) {
        res.status(404).send();
        return;
      }

      res.json({
        status: 'success',
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }
  }

  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ status: 'error', errors: errors.array() });
        return;
      }

      const data: UserModelInterface = {
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname,
        password: generateMD5(req.body.password + process.env.SECRET_KEY),
        confirmHash: generateMD5(process.env.SECRET_KEY || Math.random().toString()),
      };

      const user = await UserModel.create(data);

      sendEmail(
          {
            emailFrom: 'admin@social.com',
            emailTo: data.email,
            subject: 'Social Network email confirmation',
            html: `To confirm your Email address, follow the <a href="http://localhost:${
            process.env.PORT || 8888
            }/auth/verify?hash=${data.confirmHash}">Link</a>`,
          },
(err: Error | null) => {
            if (err) {
              res.status(500).json({
                status: 'error',
                message: err,
              });
            } else {
              res.status(201).json({
                status: 'success',
                data: user,
              });
            }
          },
      );
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }
  }

  async verify(req: any, res: express.Response): Promise<void> {
    try {
      const hash = req.query.hash;

      if (!hash) {
        res.status(400).send();
        return;
      }

      const user = await UserModel.findOne({ confirmHash: hash }).exec();

      if (user) {
        user.confirmed = true;
        await user.save();

        res.json({
          status: 'success',
          data: user.toJSON(),
        });
      } else {
        res.status(404).json({ status: 'error', message: 'Sorry, this user not found' });
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }
  }

  async afterLogin(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = req.user ? (req.user as UserModelDocumentInterface).toJSON() : undefined;
      res.json({
        status: 'success',
        data: {
          ...user,
          token: jwt.sign({ data: req.user }, process.env.SECRET_KEY || '123', {
            expiresIn: '30 days',
          }),
        },
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }
  }

  async getUserInfo(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = req.user ? (req.user as UserModelDocumentInterface).toJSON() : undefined;
      res.json({
        status: 'success',
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }
  }
}

export const UserCtrl = new UserController();
