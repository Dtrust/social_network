import express from 'express';
import {validationResult} from "express-validator";

import {PostModel} from '../models/PostModel';
import {isValidObjectId} from "../utils/isValidObjectId";
import {UserModelInterface} from "../models/UserModel";


class PostsController {
    async index(_: any, res: express.Response): Promise<void> {
        try {
            const posts = await PostModel.find({}).populate('user').sort({'createdAt': '-1'}).exec();

            res.json({
                status: 'success',
                data: posts,
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
            const postId = req.params.id;

            if (!isValidObjectId(postId)) {
                res.status(400).send();
                return;
            }

            const post = await PostModel.findById(postId).populate('user').exec();

            if (!post) {
                res.status(404).send();
                return;
            }

            res.json({
                status: 'success',
                data: post,
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
            const user = req.user as UserModelInterface;

            if (user?._id) {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    res.status(400).json({status: 'error', errors: errors.array() })
                }

                const data: any = {
                    text: req.body.text,
                    user: user._id,
                }

                const post = await PostModel.create(data);

                res.json({
                    status: 'success',
                    data: await post.populate('user').execPopulate(),
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }
    }

    async delete(req: express.Request, res: express.Response): Promise<void> {
        const user = req.user as UserModelInterface;

        try {
            if (user) {
                const postId = req.params.id;

                if (!isValidObjectId(postId)) {
                    res.status(400).send();
                    return;
                }

                const post = await PostModel.findById(postId);

                if (post) {
                    if( String(post.user._id) === String(user._id) ) {
                        post.remove();
                        res.send();
                    } else {
                        res.status(403).send();
                    }
                } else {
                    res.status(404).send();
                }

            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }

    }

    async update(req: express.Request, res: express.Response): Promise<void> {
        const user = req.user as UserModelInterface;

        try {
            if (user) {
                const postId = req.params.id;

                if (!isValidObjectId(postId)) {
                    res.status(400).send();
                    return;
                }

                const post = await PostModel.findById(postId);

                if (post) {
                    if( String(post.user._id) === String(user._id) ) {
                        const text = req.body.text;
                        post.text = text;
                        post.save();
                        res.send();
                    } else {
                        res.status(403).send();
                    }
                } else {
                    res.status(404).send();
                }

            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }

    }

}

export const PostsCtrl = new PostsController();
