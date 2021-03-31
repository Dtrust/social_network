import { LoadingStatus } from "../../../types";


export interface Tags {
    _id: string;
    name: string;
    count: number;
}

export interface TagsState {
    items: Tags[];
    loadingState: LoadingStatus
}
