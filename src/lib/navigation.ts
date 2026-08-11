import { Sparkles, MessageSquare, Cpu, Settings } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type SectionId = 'home' | 'chats' | 'models'

export type NavItem = {
  id: string
  label: string
  icon: LucideIcon
}

export const NAV_SECTIONS: NavItem[] = [
  { id: 'home', label: 'Home', icon: Sparkles },
  { id: 'chats', label: 'Chats', icon: MessageSquare },
  { id: 'models', label: 'Models', icon: Cpu },
]

export const NAV_FOOTER: NavItem[] = [
  { id: 'settings', label: 'Settings', icon: Settings },
]
