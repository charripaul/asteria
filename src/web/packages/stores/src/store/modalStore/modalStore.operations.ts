import { userApis } from '@asteria/apis';
import { IUserData } from '@asteria/interfaces';
import type { ReduxOperation } from '../..';
import { modalStoreActions } from './modalStore.reducer';

export const getUserData = (): ReduxOperation<Promise<void>> => async (dispatch, getState) => {
    try {
        const userData: IUserData = await userApis.getUserData();
        dispatch(modalStoreActions.setUserData(userData));
    } catch (error) {
        console.error(error);
    }
};
