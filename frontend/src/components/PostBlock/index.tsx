import React from 'react';
import {Link} from 'react-router-dom';

import {Grid, IconButton, Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ShareOutlined";

import {useStylesHome} from "../../pages/Home/theme";

interface PostBlockProps {
    _id: string;
    text: string;
    user: {
        avatarUrl: string;
        fullName: string;
        userName: string;
    };
    classes: ReturnType<typeof useStylesHome>;
}

export const PostBlock: React.FC<PostBlockProps> = ({_id, text, user, classes}: PostBlockProps): React.ReactElement => {
    return (
        <div className={classes.postBlock}>
            <Link to={`/home/post/${_id}`}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar alt={`avatar by ${user.userName}`} src={user.avatarUrl} />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography>
                            <b>{user.fullName}</b> @{user.userName}
                            <span>·</span>
                            <span>1h</span>
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
            </Link>
        </div>
    );
};