import { motion } from 'framer-motion'
import { Atom, Home, MessageSquare, Cpu, Settings, Plus } from 'lucide-react'
import type { ReactNode } from 'react'
import { NAV_FOOTER, NAV_SECTIONS, RECENT } from '@/lib/navigation'
import type { SectionId } from '@/lib/navigation'

const icons: Record<SectionId, ReactNode> = {
  home: <Home className="h-4 w-4" />,
  chats: <MessageSquare className="h-4 w-4" />,
  models: <Cpu className="h-4 w-4" />,
  settings: <Settings className="h-4 w-4" />,
}

type GlassSidebarProps = {
  active: SectionId
  onSelect: (id: SectionId) => void
}

export function GlassSidebar({ active, onSelect }: GlassSidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.28, ease: [0.2, 0, 0, 1] }}
      className="flex h-full w-64 flex-col bg-surface-modal backdrop-blur-xl shadow-soft-xl"
    >
      {/* Brand */}
      <div className="flex items-center gap-2 px-4 pt-4 pb-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-[8px] border border-border-faint bg-white/[0.015] text-text-tertiary">
          <Atom className="h-[13px] w-[13px]" strokeWidth={1.75} />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[13px] font-semibold text-text-primary">Atom AI</span>
          <span className="text-[11px] text-text-quiet">Local workspace</span>
        </div>
      </div>

      {/* Primary action */}
      <div className="px-4 pb-3">
        <button
          type="button"
          className="flex h-8 w-full items-center gap-1.5 rounded-[8px] bg-white/[0.02] px-3 text-[13px] font-medium text-text-tertiary transition-colors duration-150 hover:bg-white/[0.04] hover:text-text-secondary"
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={1.75} />
          New chat
        </button>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-4">
        {NAV_SECTIONS.map((item) => {
          const isActive = active === item.id
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id as SectionId)}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12 }}
              className={
                'relative flex items-center gap-3 rounded-[8px] px-3 py-2 text-[13px] font-medium transition-colors duration-150 ' +
                (isActive
                  ? 'text-text-primary'
                  : 'text-text-tertiary hover:text-text-secondary')
              }
            >
              {isActive && (
                <motion.span
                  layoutId="nav-indicator-drawer"
                  transition={{ type: 'spring', stiffness: 480, damping: 38 }}
                  className="absolute inset-0 rounded-[8px] border-l-2 border-accent"
                />
              )}
              {icons[item.id]}
              <span>{item.label}</span>
            </motion.button>
          )
        })}

        {/* Recent */}
        <div className="mt-5 mb-2 px-2 text-[11px] font-medium tracking-widest text-text-quiet uppercase">
          Recent
        </div>
        {RECENT.map((item) => (
          <motion.button
            key={item.title}
            type="button"
            className="flex items-center justify-between rounded-[8px] px-3 py-2 text-start text-[13px] text-text-tertiary transition-colors duration-150 hover:bg-white/[0.02] hover:text-text-secondary"
          >
            <span className="truncate">{item.title}</span>
            <span className="text-[11px] text-text-quiet">{item.time}</span>
          </motion.button>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-border-faint px-4 py-3">
        {NAV_FOOTER.map((item) => {
          const isActive = active === item.id
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id as SectionId)}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12 }}
              className={
                'relative flex w-full items-center gap-3 rounded-[8px] px-3 py-2 text-[13px] font-medium transition-colors duration-150 ' +
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
              <span>{item.label}</span>
            </motion.button>
          )
        })}
        <div className="mt-2 flex items-center gap-2.5 border-t border-border-faint pt-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border-faint text-[10px] font-semibold text-text-secondary">
            A
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[13px] font-medium text-text-primary">Atom User</span>
            <span className="text-[11px] text-text-quiet">Local profile</span>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}