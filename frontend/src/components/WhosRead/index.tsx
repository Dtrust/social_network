import React from 'react';
import { useSelector } from "react-redux";

import { Button, List, ListItem, Paper, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import { useStylesHome } from "../../pages/Home/theme";
import { selectWhosReadItems } from "../../store/ducks/whosRead/selectors";


export const WhosRead = () => {
    const classes = useStylesHome();
    const items = useSelector(selectWhosReadItems);

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                <b>Who's read</b>
            </Paper>
            <List>
                {
                    items.map(obj => (
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
                    ))
                }
            </List>
        </Paper>
    )
}
