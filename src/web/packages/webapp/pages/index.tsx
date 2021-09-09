import { userApis } from '@asteria/apis';
import { IUserData } from '@asteria/interfaces';
import { modalStoreActions } from '@asteria/stores';
import Button from '@mui/material/Button';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useDispatch } from 'react-redux';
import Modal from '../components/DefaultModal';

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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const userData: IUserData = (await userApis.getUserData()).data;

    return {
        props: {
            userData,
        },
    };
};

export default Home;
