import StateContainer from 'react-statecraft';
import { initialState } from './initialState';

export const GlobalState = new StateContainer(initialState, {
  debug: true,
});

export const action = GlobalState.action;
export const connect = GlobalState.connect;
export const effect = GlobalState.effect;
export const getState = GlobalState.getState;
export const Provider = GlobalState.Provider;

window.app = GlobalState;
