import { combineReducers } from '@reduxjs/toolkit';
import { modalStoreInitialState, modalStoreReducer } from './modalStore';

const rootReducer = combineReducers({
    modal: modalStoreReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;

export default rootReducer;

export const initialState: IAppState = {
    modal: modalStoreInitialState,
};
