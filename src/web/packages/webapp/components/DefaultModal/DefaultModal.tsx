import { modalStoreOperations } from '@asteria/stores';
import Modal from '@mui/material/Modal';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';
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

export default React.memo((props: IModalEnhancedProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { modalOpen, userData, onClose } = props;

    dispatch(modalStoreOperations.getUserData());

    return (
        <Modal open={modalOpen} onClose={onClose} className={classes.modal}>
            <div className={classes.paper}>
                <p>{JSON.stringify(userData)}</p>
            </div>
        </Modal>
    );
});
