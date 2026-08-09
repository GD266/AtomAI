import { createContext } from 'react'
import type { AppContextValue } from './types'

export const AppStateContext = createContext<AppContextValue | undefined>(undefined)
