import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';

// Функция, которая создает хранилище Redux. 
export function createReduxStore(initialState?: StateSchema) {
  // Объект, который содержит все редьюсеры приложения
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
  }
  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api
        },
      },
    }),
  });
  // @ts-ignore
  store.reducerManager = reducerManager;
  // Функция, которая создает хранилище Redux.
  return store
}

// Хук, который возвращает функцию dispatch хранилища Redux.
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']