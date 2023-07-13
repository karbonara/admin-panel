import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { useDispatch } from 'react-redux';

// Функция, которая создает хранилище Redux. 
export function createReduxStore(initialState?: StateSchema) {
  // Объект, который содержит все редьюсеры приложения
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  }
  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
  });
  // @ts-ignore
  store.reducerManager = reducerManager;
  // Функция, которая создает хранилище Redux.
  return store
}

// Хук, который возвращает функцию dispatch хранилища Redux.
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']