import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { GamesDataSchema } from 'entities/Games/model/types/games';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUser';
import { EditBasicGoodSchema } from 'features/EditBasicGood';

export interface StateSchema {
  user: UserSchema;

  // Асинхронные редьюсеры 
  loginForm?: LoginSchema;
  editBasicGood?: EditBasicGoodSchema;
  gamesData?: GamesDataSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}