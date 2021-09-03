import { modalStoreActions } from '@asteria/stores';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import Modal from '../components/DefaultModal';

const Home = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Button
                variant={'contained'}
                color={'primary'}
                onClick={() => {
                    dispatch(modalStoreActions.openModal());
                }}
            >
                {'Get User Data'}
            </Button>
            <Modal />
        </div>
    );
};

export default Home;
