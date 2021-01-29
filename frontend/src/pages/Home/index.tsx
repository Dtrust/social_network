import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Route } from 'react-router-dom';

import {Grid, Typography, Paper, Button, List, ListItem} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStylesHome } from './theme';
import {PostBlock} from "../../components/PostBlock";
import {MenuBlock} from "../../components/MenuBlock";
import {AddPostForm} from "../../components/AddPostForm";
import {SearchField} from "../../components/SearchField";
import { fetchPosts } from '../../store/ducks/posts/actions/actionCreators';
import {selectIsPostsLoading, selectPostsItems} from '../../store/ducks/posts/selectors';
import { fetchTags } from '../../store/ducks/tags/actions/actionCreators';
import {TagsBlock} from "../../components/TagsBlock";
import {BackButton} from "../../components/BackButton";
import {Post} from "../Post";


export const Index = (): React.ReactElement => {
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

                            <Paper className={classes.rightSideBlock}>
                                <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                                    <b>Who's read</b>
                                </Paper>
                                <List>
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <Avatar
                                            alt='Glen Rice'
                                            src='https://img.favpng.com/0/19/12/computer-icons-avatar-icon-design-png-favpng-MbC2sNWBjav8k1nYeY0FMTcgZ.jpg'
                                        />
                                        <ListItemText
                                            primary='3pts contest'
                                            secondary={
                                                <Typography component='span'>
                                                    @GlenRice
                                                </Typography>
                                            }
                                        />
                                        <Button>
                                            <PersonAddIcon/>
                                        </Button>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};
