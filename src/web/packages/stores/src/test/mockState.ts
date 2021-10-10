import { IAppState, initialState } from '..';

export const mockState: IAppState = {
    ...initialState,
};

export const mockGetState = (state = mockState) => state;
