import React from 'react';

import {Button, Paper, TextareaAutosize} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

import {useStylesHome} from "../../pages/Home/theme";
import {useDispatch, useSelector} from "react-redux";
import {fetchAddPost} from '../../store/ducks/posts/actions/actionCreators';
import {selectAddPostState} from "../../store/ducks/posts/selectors";
import {AddPostState} from "../../store/ducks/posts/contracts/state";


interface AddPostFormProps {
    classes: ReturnType<typeof useStylesHome>;
    maxRows?: number;
}

const MAX_LENGTH = 280

export const AddPostForm: React.FC<AddPostFormProps> = ({classes, maxRows}: AddPostFormProps): React.ReactElement => {
    const dispatch = useDispatch();
    const addPostState = useSelector(selectAddPostState);
    const [text, setText] = React.useState<string>('');
    const textLimitPercent = Math.round((text.length / MAX_LENGTH) * 100);
    const textCount = MAX_LENGTH - text.length;

    const handlerChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickAddPost = (): void => {
        dispatch(fetchAddPost(text));
        setText('');
    }

    return (
        <Paper>
            <div className={classes.addForm}>
                <div className={classes.addFormBody}>
                    <Avatar
                        className={classes.userAvatar}
                        alt={'User Avatar'}
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6UpYpMdplAvGa4_40vzsdesyX_vbmlC1vQ&usqp=CAU'
                    />
                    <TextareaAutosize
                        onChange={handlerChangeTextarea}
                        className={classes.addFormTextarea}
                        placeholder="What's happening"
                        value={text}
                        rowsMax={maxRows}
                    />
                </div>
                <div className={classes.addFormBottom}>
                    <div className={classes.addFormBottomActions}>
                        <IconButton>
                            <ImageOutlinedIcon/>
                        </IconButton>
                        <IconButton>
                            <EmojiIcon/>
                        </IconButton>
                    </div>
                    <div className={classes.addFormBottomRight}>
                        {text && (
                            <>
                                <span>{textCount}</span>
                                <div className={classes.addFromCircleProgress}>
                                    <CircularProgress
                                        variant='determinate'
                                        size={20}
                                        thickness={4}
                                        value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                        style={text.length >= MAX_LENGTH ? {color: 'red'}: undefined}
                                    />
                                    <CircularProgress
                                        style={{color: 'rgba(0, 0, 0, .1)'}}
                                        variant='determinate'
                                        size={20}
                                        thickness={4}
                                        value={100}
                                    />
                                </div>
                            </>
                        )}
                        <Button
                            onClick={handleClickAddPost}
                            disabled={addPostState === AddPostState.LOADING || !text || text.length >= MAX_LENGTH}
                        >
                            {addPostState === AddPostState.LOADING ? <CircularProgress/> : 'Add Post'}
                        </Button>
                    </div>
                    {addPostState === AddPostState.ERROR && (
                        <div>Sorry, add post Error! Please try again</div>
                    )}
                </div>
            </div>
            <div className={classes.addFormBottomLine}></div>
        </Paper>
    );
};