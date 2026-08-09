import type { Dispatch } from 'react'

export type AppState = {
  theme: 'light' | 'dark'
}

export type AppAction = { type: 'SET_THEME'; payload: 'light' | 'dark' }

export interface AppContextValue {
  state: AppState
  dispatch: Dispatch<AppAction>
}
