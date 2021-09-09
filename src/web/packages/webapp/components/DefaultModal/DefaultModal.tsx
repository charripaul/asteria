import { IUserData } from '@asteria/interfaces';
import { modalStoreOperations } from '@asteria/stores';
import Modal from '@mui/material/Modal';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { IModalEnhancedProps } from './DefaultModal.types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: '#383b39',
            border: '2px solid #000',
            boxShadow: '5px',
            padding: '2 4 3',
        },
    })
);

const getDataOnModalOpen = (dispatch: Dispatch<any>, modalOpen: boolean, userData: IUserData | undefined) => {
    if (typeof userData === 'undefined' && modalOpen) {
        dispatch(modalStoreOperations.fetchUserData());
    }
};

const DefaultModal = (props: IModalEnhancedProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { modalOpen, userData, userDataServer, onClose } = props;

    getDataOnModalOpen(dispatch, modalOpen, userData);

    return (
        <Modal open={modalOpen} onClose={onClose} className={classes.modal}>
            <div className={classes.paper}>
                <p>{'user data server side: ' + JSON.stringify(userDataServer)}</p>
                <p>{'user data client side: ' + JSON.stringify(userData)}</p>
            </div>
        </Modal>
    );
};

export default React.memo(DefaultModal);
