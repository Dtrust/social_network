import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";

import { PostsState } from "./ducks/posts/contracts/state";
import { rootReducer } from "./rootReducer";
import { TagsState } from "./ducks/tags/contracts/state";
import { PostState } from "./ducks/post/contracts/state";
import { UserState } from "./ducks/user/contracts/state";
import { WhosReadState } from "./ducks/whosRead/contracts/state";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    posts: PostsState;
    tags: TagsState;
    post: PostState;
    user: UserState;
    whosRead: WhosReadState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)
