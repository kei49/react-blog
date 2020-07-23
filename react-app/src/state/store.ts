// import thunk from 'redux-thunk';
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { routerReducer } from 'react-router-redux';

import admin from './admin';

const rootReducer = combineReducers({
  admin,
  routing: routerReducer  
});

const store = configureStore({
  reducer: rootReducer
});

export default store
export type AppState = ReturnType<typeof rootReducer>