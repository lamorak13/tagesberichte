import { reportReducer } from './reports/reportReducer';

const redux = require('redux');
const combineReducers = redux.combineReducers;

export const rootReducer = combineReducers({
  reports: reportReducer,
});
