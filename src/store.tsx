import { useDispatch } from 'react-redux'
import { ThunkAction } from 'redux-thunk'
import { configureStore, Action, getDefaultMiddleware  } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import logger from 'redux-logger';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key:"main-root",
  storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer);





// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo')!)
//   : undefined

// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// } as {}


const middleware = [...getDefaultMiddleware(), logger];

// const store = configureStore({
//   reducer: rootReducer,
//   middleware,
// })
const store = configureStore({
  reducer: persistedReducer,
  middleware,
})

const persistedStore = persistStore(store)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export type RootState = ReturnType<typeof store.getState>


export {persistedStore}
export default store
