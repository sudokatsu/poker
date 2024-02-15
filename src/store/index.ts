import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { RootState, setupListeners } from '@reduxjs/toolkit/query'
import { initialState } from './initialState'

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: () => true,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
    },
    preloadedState,
  })
  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore(initialState)

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
