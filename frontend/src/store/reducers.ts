/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

import { InjectedReducersType } from 'utils/types/injector-typings';

import { authenReducer } from './reducers/Authetication';

import { userReducer } from './reducers/Admin';

import { authenInterface } from './reducers/Authetication';

import { userInterface } from './reducers/Admin';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export interface rootState {
  authenReducer: authenInterface;
  userReducer: userInterface;
}
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return state => state;
  } else {
    return combineReducers({
      authenReducer,
      userReducer,
      // ...injectedReducers,
    });
  }
}
