import React from 'react';
import {useHistory} from 'react-router-dom';

import {Grid, IconButton, Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ShareOutlined";

import {useStylesHome} from "../../pages/Home/theme";
import { formatDate } from '../../utils/formatDate';


interface PostBlockProps {
    _id: string;
    text: string;
    user: {
        avatarurl: string;
        fullname: string;
        username: string;
    };
    createdAt: string;
    classes: ReturnType<typeof useStylesHome>;
}

export const PostBlock: React.FC<PostBlockProps> = ({_id, text, user, createdAt, classes}: PostBlockProps): React.ReactElement => {
    const history = useHistory();

    const handleClickPost = (): void => {
        history.push(`/home/post/${_id}`);
    }

    return (
        <div className={classes.postBlock}>
            <a onClick={handleClickPost} href={`/home/post/${_id}`}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar alt={`avatar by ${user.username}`} src={user.avatarurl} />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography>
                            <b>{user.fullname}</b> @{user.username}
                            <span>·</span>
                            <span>{formatDate(new Date(createdAt))}</span>
                            <button>Delete</button>
                            <button>Edit</button>
                        </Typography>
                        <Typography variant='body1' gutterBottom>
                            {text}
                        </Typography>
                        <div style={{maxWidth:'90%', display:'flex', justifyContent: "space-between"}}>
                            <div>
                                <IconButton>
                                    <CommentIcon/>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <RepostIcon/>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <LikeIcon/>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <ShareIcon/>
                                </IconButton>
                                <span>1</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </a>
        </div>
    );
};