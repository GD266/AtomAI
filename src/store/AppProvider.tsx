import { useReducer } from 'react'
import type { ReactNode } from 'react'
import { AppStateContext } from './context'
import { appReducer, initialState } from './reducer'

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}
