import { userApis } from '@asteria/client-side-apis';
import { IUserData } from '@asteria/interfaces';
import type { ReduxOperation } from '../..';
import { modalStoreActions } from './modalStore.reducer';

export const fetchUserData = (): ReduxOperation<Promise<void>> => async (dispatch, getState) => {
    try {
        const userData: IUserData = await userApis.getUserDataClient();
        dispatch(modalStoreActions.setUserData(userData));
    } catch (error) {
        console.error(error);
    }
};
