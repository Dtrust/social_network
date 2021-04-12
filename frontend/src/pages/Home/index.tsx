import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route } from 'react-router-dom';

import { Grid, Typography, Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStylesHome } from './theme';
import { PostBlock } from "../../components/PostBlock";
import { MenuBlock } from "../../components/MenuBlock";
import { AddPostForm } from "../../components/AddPostForm";
import { SearchField } from "../../components/SearchField";
import { fetchPosts } from '../../store/ducks/posts/actions/actionCreators';
import { selectIsPostsLoading, selectPostsItems } from '../../store/ducks/posts/selectors';
import { fetchTags } from '../../store/ducks/tags/actions/actionCreators';
import { TagsBlock } from "../../components/TagsBlock";
import { BackButton } from "../../components/BackButton";
import { Post } from "../Post";
import { WhosRead } from '../../components/WhosRead';


export const Home = (): React.ReactElement => {
    const classes = useStylesHome();
    const dispatch = useDispatch();
    const posts = useSelector(selectPostsItems);
    const isLoading = useSelector(selectIsPostsLoading);

    React.useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchTags())
    },[dispatch])

    return (
        <section>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <MenuBlock classes={classes}/>
                </Grid>
                <Grid item xs={7}>
                    <Paper>
                        <Paper variant='outlined'>

                            <Route path='/home/:any'>
                                <BackButton/>
                            </Route>

                            <Route path={['/home', '/home/:search']} exact>
                                <Typography variant='h6'>Main page</Typography>
                            </Route>

                            <Route path='/home/post'>
                                <Typography variant='h6'>TweetIt (Action)</Typography>
                            </Route>

                        </Paper>

                        <Route path={['/home', '/home/:search']} exact>
                            <AddPostForm classes={classes}/>
                        </Route>

                        <Route path='/home' exact>
                            {isLoading ? <CircularProgress /> : posts.map(post => <PostBlock key={post._id} classes={classes} {...post} />
                            )}
                        </Route>

                        <Route path='/home/post/:id' exact component={Post} />

                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.rightSide}>
                        <SearchField/>
                        <Paper className={classes.rightSideBlock}>

                            <TagsBlock classes={classes}/>

                            <WhosRead/>

                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};
