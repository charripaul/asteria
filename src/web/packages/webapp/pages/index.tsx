import { IUserData } from '@asteria/interfaces';
import { modalStoreActions } from '@asteria/stores';
import Button from '@mui/material/Button';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useDispatch } from 'react-redux';
import Modal from '../components/DefaultModal';
import { getUserData } from './api/userData';

const Home = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const dispatch = useDispatch();
    const userData: IUserData = props.userData;

    const modalProps = {
        userDataServer: userData,
    };

    return (
        <div>
            <Button
                variant={'contained'}
                color={'primary'}
                onClick={() => {
                    dispatch(modalStoreActions.openModal());
                }}
            >
                {'Get ' + userData.data.first_name + ' Data'}
            </Button>
            <Modal {...modalProps} />
        </div>
    );
};

// Server side call code directly, client side call internal api
export const getServerSideProps: GetServerSideProps = async (context) => {
    const userData: IUserData = (await getUserData()).data;

    return {
        props: {
            userData,
        },
    };
};

export default Home;
