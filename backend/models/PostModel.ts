import { model, Schema, Document } from 'mongoose';
import {UserModelDocumentInterface} from "./UserModel";

export interface PostModelInterface {
    _id?: string;
    text: string;
    user: UserModelDocumentInterface;
}

export type PostModelDocumentInterface = PostModelInterface & Document;

const PostSchema = new Schema<PostModelInterface>({
    text: {
        required: true,
        type: String,
        maxlength: 280,
    },
    user: {
        required: true,
        ref: 'User',
        type: Schema.Types.ObjectId,
    }
},{
    timestamps: true,
});

export const PostModel = model<PostModelDocumentInterface>('Post', PostSchema);
