import { combineReducers } from 'redux';

import homeReducer from '../app/home/reducer';

import { i18nReducer } from 'react-redux-i18n';

import HeaderReducer from '../components/layout/blocks/header/HeaderReducer';


const appReducer = combineReducers({
  i18nReducer,
  homeReducer,
  HeaderReducer
});

export default (state = {}, action) => {
  return appReducer(state, action);
}