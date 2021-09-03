import { IUserData } from '@asteria/interfaces';
import type { IAppState } from '../root-reducer';

export const SelectIsModalOpen = (state: IAppState): boolean => state.modal.modalOpen;
export const SelectUserData = (state: IAppState): IUserData | undefined => state.modal.userData;
