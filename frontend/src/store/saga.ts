import { all } from "redux-saga/effects";
import { postSaga } from "./ducks/post/sagas";
import { postsSaga } from "./ducks/posts/sagas";
import { tagsSaga } from "./ducks/tags/sagas";
import { userSaga } from "./ducks/user/sagas";


export default function* rootSaga() {
    yield all([
        postsSaga(),
        postSaga(),
        tagsSaga(),
        userSaga()
    ])
}
