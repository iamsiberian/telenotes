import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import rootReducer from '../reducers/rootReducer';
import { translationsObject } from '../localization/Localization';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export const store =  createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('ru'));

