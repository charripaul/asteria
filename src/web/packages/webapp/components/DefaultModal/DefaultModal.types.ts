import { IUserData } from '@asteria/interfaces';
import React from 'react';

export interface IModalState {
    modalOpen: boolean;
    userData?: IUserData;
}

export interface IModalActions {
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;
    onOpen?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type IModalEnhancedProps = IModalState & IModalActions;
