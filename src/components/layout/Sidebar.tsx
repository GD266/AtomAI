import { motion } from 'framer-motion'
import { Atom, Home, MessageSquare, Cpu, Settings } from 'lucide-react'
import type { ReactNode } from 'react'
import { NAV_FOOTER, NAV_SECTIONS } from '@/lib/navigation'
import type { SectionId } from '@/lib/navigation'

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
      transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      className="relative z-20 hidden h-full w-[52px] shrink-0 flex-col items-center border-r border-border-faint py-4 lg:flex"
    >
      {/* Brand */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="mb-7 flex h-6 w-6 items-center justify-center rounded-[8px] border border-border-faint bg-white/[0.015] text-text-tertiary"
      >
        <Atom className="h-[13px] w-[13px]" strokeWidth={1.75} />
      </motion.div>

      {/* Nav */}
      <nav className="flex flex-col items-center gap-2">
        {NAV_SECTIONS.map((item) => {
          const isActive = active === item.id
          return (
            <motion.button
              key={item.id}
              type="button"
              title={item.label}
              onClick={() => onSelect(item.id as SectionId)}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.12 }}
              className={
                'relative flex h-9 w-9 items-center justify-center rounded-[8px] ' +
                (isActive
                  ? 'text-text-primary'
                  : 'text-text-tertiary hover:text-text-secondary')
              }
            >
              {isActive && (
                <motion.span
                  layoutId="nav-indicator"
                  transition={{ type: 'spring', stiffness: 480, damping: 38 }}
                  className="absolute inset-0 rounded-[8px] border-l-2 border-accent"
                />
              )}
              {icons[item.id]}
            </motion.button>
          )
        })}
      </nav>

      <div className="flex-1" />

      {/* Footer */}
      <div className="flex flex-col items-center gap-4">
        {NAV_FOOTER.map((item) => {
          const isActive = active === item.id
          return (
            <motion.button
              key={item.id}
              type="button"
              title={item.label}
              onClick={() => onSelect(item.id as SectionId)}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.12 }}
              className={
                'relative flex h-9 w-9 items-center justify-center rounded-[8px] ' +
                (isActive
                  ? 'text-text-primary'
                  : 'text-text-tertiary hover:text-text-secondary')
              }
            >
              {isActive && (
                <motion.span
                  layoutId="nav-indicator-footer"
                  transition={{ type: 'spring', stiffness: 480, damping: 38 }}
                  className="absolute inset-0 rounded-[8px] border-l-2 border-accent"
                />
              )}
              {icons[item.id]}
            </motion.button>
          )
        })}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.12 }}
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-border-faint text-[10px] font-semibold text-text-secondary"
        >
          A
        </motion.div>
      </div>
    </motion.aside>
  )
}