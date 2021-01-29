export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'

}

export interface Tags {
    _id: string;
    name: string;
    count: number;
}

export interface TagsState {
    items: Tags[];
    loadingState: LoadingState
}