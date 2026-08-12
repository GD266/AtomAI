import { Home, MessageSquare, Cpu, Settings } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type SectionId = 'home' | 'chats' | 'models' | 'settings'

export type NavItem = {
  id: SectionId
  label: string
  icon: LucideIcon
}

export const NAV_SECTIONS: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'chats', label: 'Chats', icon: MessageSquare },
  { id: 'models', label: 'Models', icon: Cpu },
]

export const NAV_FOOTER: NavItem[] = [
  { id: 'settings', label: 'Settings', icon: Settings },
]

export const RECENT = [
  { title: 'Quantum computing basics', time: '2h' },
  { title: 'Weekly planning ritual', time: '1d' },
  { title: 'Notes on Raycast UI', time: '3d' },
]