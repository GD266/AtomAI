import { motion } from 'framer-motion'
import { Atom } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { NAV_FOOTER, NAV_SECTIONS } from '@/lib/navigation'
import type { SectionId } from '@/lib/navigation'

type SidebarProps = {
  active: SectionId
  onSelect: (id: SectionId) => void
}

function RailButton({
  isActive,
  label,
  onClick,
  children,
}: {
  isActive?: boolean
  label: string
  onClick: () => void
  children: ReactNode
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'relative flex h-9 w-9 items-center justify-center rounded-[8px] text-text-tertiary transition-colors duration-150 hover:bg-overlay-subtle hover:text-text-secondary',
        isActive && 'text-text-primary',
      )}
    >
      {isActive && (
        <motion.span
          layoutId="rail-active"
          transition={{ type: 'spring', stiffness: 480, damping: 38 }}
          className="absolute inset-0 rounded-[8px] border border-border-faint bg-overlay-subtle"
        />
      )}
      <span className="relative">{children}</span>
    </motion.button>
  )
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
        transition={{ duration: 0.3, delay: 0.05, ease: [0.2, 0, 0, 1] }}
        className="mb-7 flex h-7 w-7 items-center justify-center rounded-[8px] border border-border-faint bg-white/[0.03] text-text-secondary"
      >
        <Atom className="h-[15px] w-[15px]" strokeWidth={1.75} />
      </motion.div>

      {/* Navigation */}
      <nav className="flex flex-col items-center gap-2">
        {NAV_SECTIONS.map((item) => {
          const Icon = item.icon
          return (
            <RailButton
              key={item.id}
              label={item.label}
              isActive={active === item.id}
              onClick={() => onSelect(item.id)}
            >
              <Icon className="h-[17px] w-[17px]" strokeWidth={1.6} />
            </RailButton>
          )
        })}
      </nav>

      <div className="flex-1" />

      {/* Footer */}
      <div className="flex flex-col items-center gap-4">
        {NAV_FOOTER.map((item) => {
          const Icon = item.icon
          return (
            <RailButton
              key={item.id}
              label={item.label}
              isActive={active === item.id}
              onClick={() => onSelect(item.id)}
            >
              <Icon className="h-[17px] w-[17px]" strokeWidth={1.6} />
            </RailButton>
          )
        })}
        <motion.div
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-border-subtle bg-surface-3 text-[10px] font-semibold text-text-secondary"
        >
          A
        </motion.div>
      </div>
    </motion.aside>
  )
}