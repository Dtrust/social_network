import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';

import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {Color} from '@material-ui/lab/Alert';

import ModalBlock from "../../../components/ModalBlock";
import {useStylesSignIn} from "../index";
import {Notification} from "../../../components/Notifications";
import {fetchSignIn} from "../../../store/ducks/user/actions/actionCreators";
import {selectUserStatus} from "../../../store/ducks/user/selectors";
import {LoadingStatus} from "../../../store/types";


interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

export interface LoginFormProps {
    email: string;
    password: string;
}

const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Invalid E-mail address').required('Please, enter Your E-mail'),
    password: yup.string().min(6, 'Please, enter a correct password').required(),
});

export const LoginModal: React.FC<LoginModalProps> = ({open, onClose}): React.ReactElement => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();

    // Bad practice BEGIN
    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {});
    // Bad practice END

    const loadingStatus = useSelector(selectUserStatus)

    const {control, handleSubmit, errors} = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    })

    const onSubmit = async (data: LoginFormProps) => {
        dispatch(fetchSignIn(data))
    };

    React.useEffect(() => {
        if (loadingStatus === LoadingStatus.SUCCESS) {
            openNotificationRef.current('Successfully logged in', 'success')
            onClose();
        } else if (loadingStatus === LoadingStatus.ERROR) {
            openNotificationRef.current('Incorrect Login or Password', 'error');
        }
    }, [loadingStatus]);

    return <Notification>
        {
            callback => {
                openNotificationRef.current = callback;

                return (
                    <ModalBlock
                        visible={open}
                        onClose={onClose}
                        classes={classes}
                        title='Log in'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <DialogContent>
                                <Controller
                                    as={TextField}
                                    control={control}
                                    defaultValue=''
                                    name="email"
                                    margin="dense"
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    helperText={errors.email?.message}
                                    error={!!errors.email}
                                    autoFocus
                                    fullWidth
                                />
                                <Controller
                                    as={TextField}
                                    control={control}
                                    defaultValue=''
                                    name="password"
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    helperText={errors.password?.message}
                                    error={!!errors.password}
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={onClose} color="primary">
                                    Cancel
                                </Button>
                                <Button type='submit' color="primary">
                                    Log in
                                </Button>
                            </DialogActions>
                        </form>
                    </ModalBlock>
                )
            }
        }
    </Notification>
    }
