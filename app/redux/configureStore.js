import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducers/index'
import { createLogger } from 'redux-logger';

export default () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }
  const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer))
  let store = createStore(persistedReducer, compose(applyMiddleware(thunk, createLogger())))
  let persistor = persistStore(store)
  return { store, persistor }
}