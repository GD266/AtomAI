import { useContext } from 'react'
import { AppStateContext } from './context'

export function useAppStore() {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error('useAppStore must be used within AppProvider')
  }
  return context
}
