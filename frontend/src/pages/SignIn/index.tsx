import React from 'react';

import {makeStyles, Typography} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from "@material-ui/core/Button";

import {LoginModal} from "./components/LoginModal";
import {RegisterModal} from "./components/RegisterModal";


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

                <RegisterModal open={visibleModal === 'signUp'} onClose={handleCloseModal} />

                <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal} />

            </section>
        </div>
    );
}
