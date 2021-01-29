import React from 'react';
import { Link } from 'react-router-dom';

import {Button, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/ListAlt";
import UserIcon from "@material-ui/icons/PersonOutline";

import {useStylesHome} from "../../pages/Home/theme";
import ModalBlock from "../ModalBlock";
import {AddPostForm} from "../AddPostForm";


interface MenuBlockProps {
    classes: ReturnType<typeof useStylesHome>
}

export const MenuBlock: React.FC<MenuBlockProps> = ({classes}: MenuBlockProps): React.ReactElement => {
    const [visibleAddModalForm, setVisibleAddModalForm] = React.useState<boolean>(false);

    const handleClickOpenAddPost = () => {
        setVisibleAddModalForm(true)
    }

    const onCloseAddPost = () => {
        setVisibleAddModalForm(false)
    }

    return (
        <ul>
            <li>
                <div>
                    <Link to='/home'>
                        <IconButton aria-label="delete">
                            <TwitterIcon color='primary'/>
                        </IconButton>
                    </Link>
                </div>
            </li>
            <li>
                <div>
                    <IconButton aria-label="delete">
                        <SearchIcon/>
                    </IconButton>
                    <Typography>Search</Typography>
                </div>
            </li>
            <li>
                <div>
                    <IconButton aria-label="delete">
                        <NotificationIcon/>
                    </IconButton>
                    <Typography>Notifications</Typography>
                </div>
            </li>
            <li>
                <div>
                    <IconButton aria-label="delete">
                        <MailOutlineIcon/>
                    </IconButton>
                    <Typography>Messages</Typography>
                </div>
            </li>
            <li>
                <div>
                    <IconButton aria-label="delete">
                        <BookmarkBorderIcon/>
                    </IconButton>
                    <Typography>Bookmarks</Typography>
                </div>
            </li>
            <li>
                <div>
                    <IconButton aria-label="delete">
                        <ListIcon/>
                    </IconButton>
                    <Typography>Lists</Typography>
                </div>
            </li>
            <li>
                <div>
                    <IconButton aria-label="delete">
                        <UserIcon/>
                    </IconButton>
                    <Typography>Profile</Typography>
                </div>
            </li>
            <li>
                <Button onClick={handleClickOpenAddPost}>Tweet</Button>
                <ModalBlock title={''} visible={visibleAddModalForm} onClose={onCloseAddPost}>
                    <AddPostForm maxRows={15} classes={classes}/>
                </ModalBlock>
            </li>
        </ul>
    );
};