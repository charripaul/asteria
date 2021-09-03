import type { AnyAction } from '@reduxjs/toolkit';
import type { ThunkDispatch as DefaultThunkDispatch } from 'redux-thunk';
import { IAppState } from '.';

type GetState = () => IAppState;

export type AppDispatch = DefaultThunkDispatch<IAppState, any, AnyAction>;
export type ReduxOperation<T = void> = (dispatch: AppDispatch, getState: GetState) => T;
