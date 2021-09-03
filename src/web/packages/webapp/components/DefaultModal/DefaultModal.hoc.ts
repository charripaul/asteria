import { AppDispatch, IAppState, modalStoreActions, modalStoreSelectors } from '@asteria/stores';
import { connect } from 'react-redux';
import { IModalActions, IModalState } from './DefaultModal.types';

const mapStateToProps = (state: IAppState): IModalState => {
    return {
        modalOpen: modalStoreSelectors.SelectIsModalOpen(state),
        userData: modalStoreSelectors.SelectUserData(state),
    };
};

const mapDispatchToProps = (dispatch: AppDispatch): IModalActions => {
    return {
        onClose: () => {
            dispatch(modalStoreActions.closeModal());
        },
        onOpen: () => {
            dispatch(modalStoreActions.openModal());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps);
