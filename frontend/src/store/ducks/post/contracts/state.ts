import { LoadingStatus } from "../../../types";
import { Post } from "../../posts/contracts/state";

export interface PostState {
    data?: Post;
    loadingState: LoadingStatus
}
