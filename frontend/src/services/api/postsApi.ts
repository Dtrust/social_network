import axios from "axios";

import {Post, PostsState } from "../../store/ducks/posts/contracts/state";

export const PostsApi = {
    fetchPosts(): Promise<PostsState['items']> {
        return axios.get('/posts')
            .then(({data}) => data)
    },
    fetchPostData(id: string): Promise<Post[]> {
        return axios.get('/posts?_id=' + id)
            .then(({data}) => data)
    },
    addPost(payload: Post): Promise<Post> {
        return axios.post('/posts', payload)
            .then(({data}) => data)
    }
}