import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  persistStore,
  getStoredState
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import user from './modules/user'

const reducers = combineReducers({
  user
})

const persistConfig = {
  key: 'front-end-react-18',
  storage,
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.REACT_APP_AMBIENTE !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})
const persistor = persistStore(store)

function persistorInit() {
  getStoredState({
    storage,
    key: 'front-end-react-18'
  })
}

persistorInit()

export type RootState = ReturnType<typeof store.getState>
export { store, persistor }
