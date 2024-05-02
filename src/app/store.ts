import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { counterSlice } from "../features/counter/counterSlice"
import { quotesApiSlice } from "../features/quotes/quotesApiSlice"
import { authApiSlice } from "../auth/authApiSlice"
import { recordApiSlice } from "../features/CRUD/recordApiSlice"
import { emailApiSlice } from "../features/EmailSystem/emailApiSlice"

const rootReducer = combineSlices(
  counterSlice,
  quotesApiSlice,
  authApiSlice,
  recordApiSlice,
  emailApiSlice,
)

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,

    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat([
        quotesApiSlice.middleware,
        authApiSlice.middleware,
        recordApiSlice.middleware,
        emailApiSlice.middleware,
      ])
    },
    preloadedState,
  })

  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

export type AppStore = typeof store

export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
