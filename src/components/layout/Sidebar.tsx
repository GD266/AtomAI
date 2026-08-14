import { motion } from 'framer-motion'
import { Atom, Home, MessageSquare, Cpu, Settings } from 'lucide-react'
import type { ReactNode } from 'react'
import { NAV_SECTIONS, NAV_FOOTER } from '@/lib/navigation'
import type { SectionId } from '@/lib/navigation'
import { cubicEasing, quickConfig, railActiveIndicator } from '@/lib/motion'

type SidebarProps = {
  active: SectionId
  onSelect: (id: SectionId) => void
}

const icons: Record<SectionId, ReactNode> = {
  home: <Home className="h-[17px] w-[17px]" />,
  chats: <MessageSquare className="h-[17px] w-[17px]" />,
  models: <Cpu className="h-[17px] w-[17px]" />,
  settings: <Settings className="h-[17px] w-[17px]" />,
}

export function Sidebar({ active, onSelect }: SidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.32, ease: cubicEasing }}
      className="relative z-20 hidden h-full w-[52px] shrink-0 flex-col items-center border-r border-border-faint py-4 lg:flex"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.24, ease: cubicEasing, delay: 0.04 }}
        className="mb-7 flex h-6 w-6 items-center justify-center rounded-[8px] border border-border-faint bg-white/[0.015] text-text-tertiary"
      >
        <Atom className="h-[13px] w-[13px]" strokeWidth={1.75} />
      </motion.div>

      <nav className="flex flex-col items-center gap-2">
        {NAV_SECTIONS.map((item) => {
          const isActive = active === item.id
          return (
            <motion.button
              key={item.id}
              type="button"
              title={item.label}
              onClick={() => onSelect(item.id as SectionId)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={quickConfig}
              className={
                'relative flex h-9 w-9 items-center justify-center rounded-[8px] ' +
                (isActive
                  ? 'text-text-primary'
                  : 'text-text-tertiary hover:text-text-secondary')
              }
            >
              {isActive && (
                <motion.span
                  layoutId={`nav-indicator-${item.id}`}
                  transition={railActiveIndicator}
                  className="absolute inset-0 rounded-[8px] border-l-2 border-accent"
                />
              )}
              {icons[item.id]}
            </motion.button>
          )
        })}
      </nav>

      <div className="flex-1" />

      <div className="flex flex-col items-center gap-4">
        {NAV_FOOTER.map((item) => {
          const isActive = active === item.id
          return (
            <motion.button
              key={item.id}
              type="button"
              title={item.label}
              onClick={() => onSelect(item.id as SectionId)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={quickConfig}
              className={
                'relative flex h-9 w-9 items-center justify-center rounded-[8px] ' +
                (isActive
                  ? 'text-text-primary'
                  : 'text-text-tertiary hover:text-text-secondary')
              }
            >
              {isActive && (
                <motion.span
                  layoutId={`footer-indicator-${item.id}`}
                  transition={railActiveIndicator}
                  className="absolute inset-0 rounded-[8px] border-l-2 border-accent"
                />
              )}
              {icons[item.id]}
            </motion.button>
          )
        })}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={quickConfig}
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-border-faint text-[10px] font-semibold text-text-secondary"
        >
          A
        </motion.div>
      </div>
    </motion.aside>
  )
}