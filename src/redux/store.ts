import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Slices
import generalSlice from './feature/generalSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  purgeStoredState,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducers = combineReducers({generalSlice});

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

function resetStore() {
  purgeStoredState(persistConfig);
}
const persistor = persistStore(store);
export {store, persistor, resetStore};
