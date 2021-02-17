import {axios} from "../../core/axios";
import {Post} from "../../store/ducks/posts/contracts/state";


interface Response<T> {
    status: string;
    data: T;
}

export const PostsApi = {
    async fetchPosts(): Promise<Post[]> {
        const {data} = await axios.get<Response<Post[]>>('/posts');
        return data.data;
    },
    async fetchPostData(id: string): Promise<Post> {
        const {data} = await axios.get<Response<Post>>('/posts/' + id);
        return data.data;
    },
    async addPost(payload: string): Promise<Post> {
        const {data} = await axios.post<Response<Post>>('/posts', {text: payload});
        return data.data;
    }
}