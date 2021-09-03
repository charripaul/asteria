import { IUserData } from '@asteria/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalStore {
    modalOpen: boolean;
    userData?: IUserData;
}

export const modalStoreInitialState: ModalStore = {
    modalOpen: false,
};

const modalStore = createSlice({
    name: 'modal',
    initialState: modalStoreInitialState,
    reducers: {
        openModal: (state: ModalStore) => {
            state = {
                ...modalStoreInitialState,
                modalOpen: true,
            };
            return state;
        },
        closeModal: (state: ModalStore) => {
            state.modalOpen = false;
        },
        setUserData: (state: ModalStore, action: PayloadAction<IUserData>) => {
            state.userData = action.payload;
        },
    },
});

export const modalStoreReducer = modalStore.reducer;
export const modalStoreActions = modalStore.actions;
