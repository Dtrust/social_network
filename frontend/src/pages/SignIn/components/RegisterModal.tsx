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
import {fetchSignUp} from "../../../store/ducks/user/actions/actionCreators";
import {selectUserStatus} from "../../../store/ducks/user/selectors";
import {LoadingStatus} from "../../../store/types";


interface RegisterModalProps {
    open: boolean;
    onClose: () => void;
}

export interface RegisterFormProps {
    fullname: string;
    username: string;
    email: string;
    password: string;
    password2: string;
}

const RegisterFormSchema = yup.object().shape({
    fullname: yup.string().required('Please, enter Your full name'),
    username: yup.string().required('Please, enter uniq login'),
    email: yup.string().email('Invalid E-mail address').required('Please, enter Your E-mail'),
    password: yup.string().min(6, 'Please, enter a correct password').required(),
    password2: yup.string().oneOf([yup.ref('password'), null], 'Password must match'),
});

export const RegisterModal: React.FC<RegisterModalProps> = ({open, onClose}): React.ReactElement => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();

    // Bad practice BEGIN
    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {});
    // Bad practice END

    const loadingStatus = useSelector(selectUserStatus)

    const {control, handleSubmit, errors} = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterFormSchema)
    })

    const onSubmit = async (data: RegisterFormProps) => {
        dispatch(fetchSignUp(data))
    };

    React.useEffect(() => {
        if (loadingStatus === LoadingStatus.SUCCESS) {
            openNotificationRef.current('Successfully Sign Up', 'success')
            onClose();
        } else if (loadingStatus === LoadingStatus.ERROR) {
            openNotificationRef.current('Sign Up Error, please, try again', 'error');
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
                        title='Sign Up'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <DialogContent>
                                <Controller
                                    as={TextField}
                                    control={control}
                                    defaultValue=''
                                    name="fullname"
                                    margin="dense"
                                    id="fullname"
                                    label="Full name"
                                    type="text"
                                    helperText={errors.fullname?.message}
                                    error={!!errors.fullname}
                                    autoFocus
                                    fullWidth
                                />
                                <Controller
                                    as={TextField}
                                    control={control}
                                    defaultValue=''
                                    name="username"
                                    margin="dense"
                                    id="username"
                                    label="User name"
                                    type="text"
                                    helperText={errors.username?.message}
                                    error={!!errors.username}
                                    fullWidth
                                />
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
                                <Controller
                                    as={TextField}
                                    control={control}
                                    defaultValue=''
                                    name="password2"
                                    margin="dense"
                                    id="password2"
                                    label="Password Confirm"
                                    type="password"
                                    helperText={errors.password2?.message}
                                    error={!!errors.password2}
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={onClose} color="primary">
                                    Cancel
                                </Button>
                                <Button disabled={loadingStatus === LoadingStatus.LOADING} type='submit' color="primary">
                                    Sign Up
                                </Button>
                            </DialogActions>
                        </form>
                    </ModalBlock>
                )
            }
        }
    </Notification>
}
