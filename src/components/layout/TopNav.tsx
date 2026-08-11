import { motion } from 'framer-motion'
import { Bell, Menu, Search } from 'lucide-react'
import { NAV_SECTIONS } from '@/lib/navigation'
import type { SectionId } from '@/lib/navigation'

type TopNavProps = {
  active: SectionId
  onMenuOpen: () => void
}

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
}

export function TopNav({ active, onMenuOpen }: TopNavProps) {
  const section = NAV_SECTIONS.find((item) => item.id === active)

  return (
    <motion.header
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.2, 0, 0, 1] }}
      className="flex h-16 shrink-0 items-center gap-4 border-b border-glass-border bg-surface-panel px-4 backdrop-blur-[20px] sm:px-6"
    >
      {/* Mobile menu */}
      <motion.button
        type="button"
        onClick={onMenuOpen}
        aria-label="Open navigation"
        whileHover="hover"
        whileTap={{ scale: 0.94 }}
        variants={buttonVariants}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass-border bg-glass text-text-secondary transition-all duration-250 hover:border-glass-border-strong hover:bg-glass-hover hover:text-text-primary lg:hidden"
      >
        <Menu className="h-4.5 w-4.5" strokeWidth={1.75} />
      </motion.button>

      {/* Section title */}
      <span className="shrink-0 whitespace-nowrap text-sm font-semibold tracking-tight text-text-primary">
        {section?.label ?? 'Home'}
      </span>

      {/* Spacer */}
      <div className="min-w-0 flex-1" />

      {/* Command search placeholder */}
      <motion.button
        type="button"
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
        variants={buttonVariants}
        className="hidden h-9 w-56 shrink-0 items-center gap-2.5 rounded-lg border border-glass-border bg-glass px-3 text-sm text-text-tertiary transition-all duration-250 hover:border-glass-border-strong hover:bg-glass-hover hover:text-text-secondary md:flex"
      >
        <Search className="h-4 w-4" strokeWidth={1.75} />
        <span>Search</span>
        <kbd className="ml-auto rounded border border-glass-border-strong bg-surface-panel px-1.5 py-0.5 text-micro text-text-tertiary">
          ⌘K
        </kbd>
      </motion.button>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2">
        <motion.button
          type="button"
          aria-label="Notifications"
          whileHover="hover"
          whileTap={{ scale: 0.94 }}
          variants={buttonVariants}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass-border bg-glass text-text-secondary transition-all duration-250 hover:border-glass-border-strong hover:bg-glass-hover hover:text-text-primary"
        >
          <Bell className="h-4.5 w-4.5" strokeWidth={1.75} />
        </motion.button>
        <div className="h-6 w-px bg-glass-border" />
        <motion.div
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass-border-strong bg-glass text-micro font-semibold text-text-primary"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          A
        </motion.div>
      </div>
    </motion.header>
  )
}
