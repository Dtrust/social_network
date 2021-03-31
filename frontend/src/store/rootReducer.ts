import {combineReducers} from "redux";

import { postReducer } from "./ducks/post/reducer";
import {postsReducer} from "./ducks/posts/reducer";
import { tagsReducer } from "./ducks/tags/reducer";
import { userReducer } from "./ducks/user/reducer";


export const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
    tags: tagsReducer,
    user: userReducer,
})
