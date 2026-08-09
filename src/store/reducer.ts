import type { AppAction, AppState } from './types'

export const initialState: AppState = {
  theme: 'light',
}

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload }
    default:
      return state
  }
}
