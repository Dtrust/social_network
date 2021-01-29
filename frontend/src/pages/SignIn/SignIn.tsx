import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from "@material-ui/core/Button";
import ModalBlock from "../../components/ModalBlock";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

export const useStylesSignIn = makeStyles((theme) => ({
    button: {
        fontWeight: 700
    },
    lightBulb: {
        vertticalAlign: 'middle',
        marginRight: '2em'
    },
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    blueSide: {
        flex: '0 0 50%',
        backgroundColor: '#1DA1F2'
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: '0 0 50%',
    },
    loginSideTwitterIcon: {
        fontSize: '4em'
    }
}))

export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn();

    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <ul>
                    <li><Typography>Follow your interests.</Typography></li>
                    <li><Typography>Hear what people are talking about.</Typography></li>
                    <li><Typography>Join the conversation.</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <TwitterIcon color='primary' className={classes.loginSideTwitterIcon}/>
                <Typography variant='h4'>See what’s happening in the world right now</Typography>
                <Typography>Join Twitter today</Typography>
                <Button onClick={handleClickOpenSignUp}>Sign up</Button>
                <Button onClick={handleClickOpenSignIn}>Log in</Button>

                <ModalBlock visible={visibleModal === 'signIn'} onClose={handleCloseModal} title='Log in' classes={classes}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseModal} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleCloseModal} color="primary">
                            Log in
                        </Button>
                    </DialogActions>
                </ModalBlock>

                <ModalBlock visible={visibleModal === 'signUp'} onClose={handleCloseModal} title='Create your account' classes={classes}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseModal} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleCloseModal} color="primary">
                            Sign up
                        </Button>
                    </DialogActions>
                </ModalBlock>

            </section>
        </div>
    );
}