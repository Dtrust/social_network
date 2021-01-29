import {makeStyles, Theme} from "@material-ui/core";

export const useStylesHome = makeStyles((theme: Theme) => ({
    postBlock: {
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
            cursor: 'pointer'
        }
    },
    addForm: {},
    addFormBody: {},
    userAvatar: {},
    addFormTextarea: {},
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    addFormBottomActions: {},
    addFormBottomRight: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-around'
    },
    addFromCircleProgress: {
        position: 'relative',
        '& div': {
            position: 'absolute'
        }
    },
    addFormBottomLine: {},
    rightSide: {
        position: 'sticky'
    },
    rightSideBlock: {},
    rightSideBlockHeader: {},
    rightSideBlockItem: {}
}))