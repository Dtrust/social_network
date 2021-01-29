import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

import { CircularProgress } from '@material-ui/core';

import {PostBlock} from "../../components/PostBlock";
import {fetchPostData, setPostData} from "../../store/ducks/post/actions/actionCreators";
import {selectIsPostLoading, selectPostData} from "../../store/ducks/post/selectors";
import {useStylesHome} from "../Home/theme";


export const Post: React.FC = (): React.ReactElement | null => {
    const classes = useStylesHome();
    const dispatch = useDispatch();
    const postData = useSelector(selectPostData);
    const isLoading = useSelector(selectIsPostLoading)
    const params: { id?: string } = useParams();
    const id = params.id;

    React.useEffect(() => {
        if (id) {
            dispatch(fetchPostData(id))
        }

        return () => {
            dispatch(setPostData(undefined))
        }
    }, [dispatch, id])

    if (isLoading) {
        return <CircularProgress/>
    }

    if (postData) {
        return <PostBlock classes={classes} {...postData} />
    }

    return null
};
