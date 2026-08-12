import { motion } from 'framer-motion'
import { Atom, ChevronDown, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_FOOTER, NAV_SECTIONS, RECENT } from '@/lib/navigation'
import type { SectionId } from '@/lib/navigation'

type GlassSidebarProps = {
  active: SectionId
  onSelect: (id: SectionId) => void
  className?: string
}

export function GlassSidebar({ active, onSelect, className }: GlassSidebarProps) {
  return (
    <motion.aside
      className={cn(
        'flex h-full w-64 flex-col bg-surface-modal backdrop-blur-xl shadow-soft-xl',
        className,
      )}
    >
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-4 pt-4 pb-5">
        <div className="flex h-7 w-7 items-center justify-center rounded-[10px] border border-border-subtle bg-surface-raised text-text-secondary edge-light">
          <Atom className="h-[15px] w-[15px]" strokeWidth={1.75} />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[13px] font-semibold tracking-tight text-text-primary">
            Atom AI
          </span>
          <span className="text-[11px] text-text-quiet">Local workspace</span>
        </div>
      </div>

      {/* Workspace selector */}
      <div className="px-3 pb-4">
        <button
          type="button"
          className="flex h-8 w-full items-center gap-2 rounded-[10px] border border-border-faint bg-overlay-subtle px-2.5 text-[13px] font-medium text-text-secondary transition-colors duration-150 hover:bg-overlay hover:text-text-primary"
        >
          <ChevronDown className="h-3.5 w-3.5 text-text-tertiary" strokeWidth={1.75} />
          Default Workspace
        </button>
      </div>

      {/* Primary action */}
      <div className="px-3">
        <button
          type="button"
          className="flex h-8 w-full items-center justify-center gap-1.5 rounded-[8px] border border-border-faint bg-white/[0.03] text-[13px] font-medium text-text-secondary transition-colors duration-150 hover:border-border-subtle hover:bg-white/[0.05] hover:text-text-primary"
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={1.75} />
          New chat
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex flex-1 flex-col gap-0.5 overflow-y-auto px-3">
        {NAV_SECTIONS.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={cn(
                'relative flex h-8 items-center gap-2.5 rounded-[10px] px-2.5 text-[13px] font-medium transition-colors duration-150',
                isActive
                  ? 'border border-border-subtle bg-overlay text-text-primary shadow-soft'
                  : 'border border-transparent text-text-secondary hover:bg-overlay-subtle hover:text-text-primary',
              )}
            >
              <Icon
                className={cn(
                  'h-4 w-4',
                  isActive ? 'text-text-primary' : 'text-text-tertiary',
                )}
                strokeWidth={1.6}
              />
              {item.label}
            </button>
          )
        })}

        {/* Recent activity (visual only) */}
        <div className="mt-6 mb-1.5 px-2.5 text-[11px] font-medium tracking-wide text-text-quiet">
          RECENT
        </div>
        {RECENT.map((item) => (
          <button
            key={item.title}
            type="button"
            className="flex h-8 items-center gap-1.5 rounded-[10px] px-2.5 text-left text-[13px] text-text-tertiary transition-colors duration-150 hover:bg-overlay-subtle hover:text-text-secondary"
          >
            <span className="min-w-0 flex-1 truncate">{item.title}</span>
            <span className="shrink-0 text-[11px] text-text-quiet">{item.time}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-border-faint px-4 py-3.5">
        {NAV_FOOTER.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={cn(
                'mb-3 flex h-8 w-full items-center gap-2.5 rounded-[10px] px-2.5 text-[13px] font-medium transition-colors duration-150',
                isActive
                  ? 'border border-border-subtle bg-overlay text-text-primary shadow-soft'
                  : 'border border-transparent text-text-secondary hover:bg-overlay-subtle hover:text-text-primary',
              )}
            >
              <Icon
                className={cn(
                  'h-4 w-4',
                  isActive ? 'text-text-primary' : 'text-text-tertiary',
                )}
                strokeWidth={1.6}
              />
              {item.label}
            </button>
          )
        })}
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border-subtle bg-surface-3 text-[10px] font-semibold text-text-secondary edge-light">
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