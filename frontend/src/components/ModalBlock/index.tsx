import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {useStylesSignIn} from "../../pages/SignIn";

interface ModalBlockProps {
    title?: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    visible?: boolean;
    onClose: () => void
}

const ModalBlock: React.FC<ModalBlockProps> = ({
                                                   title,
                                                   visible = false,
                                                   onClose, classes, children
}: ModalBlockProps): React.ReactElement | null => {
    if (!visible) {
        return null;
    }
    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            {children}
        </Dialog>
    );
};

export default ModalBlock;
