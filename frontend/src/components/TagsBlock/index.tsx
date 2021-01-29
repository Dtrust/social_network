import React from 'react';
import {Link} from 'react-router-dom';

import {List, ListItem, Paper, Typography} from "@material-ui/core";

import {useStylesHome} from "../../pages/Home/theme";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import {useSelector} from "react-redux";
import {selectTagsItems, selectIsTagsLoaded} from "../../store/ducks/tags/selectors";

interface TagsBlockProps {
    classes: ReturnType<typeof useStylesHome>;
}

export const TagsBlock: React.FC<TagsBlockProps> = ({classes}: TagsBlockProps): React.ReactElement | null => {
    const items = useSelector(selectTagsItems)
    const isLoaded = useSelector(selectIsTagsLoaded)

    if(!isLoaded) {
        return null
    }

    return (
        <>
            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                <b>Actual titles</b>
            </Paper>
            <List>
                {
                    items.map((obj) => (
                        <React.Fragment key={obj._id}>
                            <ListItem className={classes.rightSideBlockItem}>
                                <Link to={`/home/search&q=${obj.name}`}>
                                    <ListItemText
                                        primary={obj.name}
                                        secondary={
                                            <Typography component='span'>
                                                Tweets: {obj.count}
                                            </Typography>
                                        }
                                    />
                                </Link>
                            </ListItem>
                        </React.Fragment>
                    ))
                }
            </List>
        </>
    );
};