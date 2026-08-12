import { motion } from 'framer-motion'
import { Menu, Plus, Search } from 'lucide-react'
import { NAV_SECTIONS } from '@/lib/navigation'
import type { SectionId } from '@/lib/navigation'

type TopNavProps = {
  active: SectionId
  onMenuOpen: () => void
}

export function TopNav({ active, onMenuOpen }: TopNavProps) {
  const section = NAV_SECTIONS.find((item) => item.id === active)

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
      className="relative z-30 flex h-[52px] shrink-0 items-center border-b border-border-faint bg-background/60 px-4 backdrop-blur-xl sm:px-5"
    >
      {/* Mobile menu */}
      <motion.button
        type="button"
        onClick={onMenuOpen}
        aria-label="Open navigation"
        whileTap={{ scale: 0.92 }}
        transition={{ duration: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
        className="mr-3 flex h-8 w-8 items-center justify-center rounded-[8px] text-text-secondary transition-colors duration-150 hover:bg-overlay-subtle hover:text-text-primary lg:hidden"
      >
        <Menu className="h-4 w-4" strokeWidth={1.75} />
      </motion.button>

      {/* Section label */}
      <span className="truncate text-[13px] font-medium tracking-tight text-text-primary">
        {section?.label ?? 'Home'}
      </span>

      {/* Spacer */}
      <div className="min-w-0 flex-1" />

      {/* Search */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden h-8 w-56 items-center gap-2 rounded-[8px] border border-border-faint bg-white/[0.025] px-2.5 text-[13px] text-text-quiet transition-colors duration-150 hover:border-border-subtle hover:bg-white/[0.045] hover:text-text-tertiary lg:flex xl:w-64"
      >
        <Search className="h-3.5 w-3.5 shrink-0 text-text-quiet" strokeWidth={1.75} />
        <span className="truncate">Search Atom AI…</span>
        <kbd className="ml-auto shrink-0 rounded-[4px] border border-border-faint bg-black/40 px-1.5 py-px text-[10px] font-medium text-text-quiet">
          ⌘K
        </kbd>
      </motion.button>

      {/* Divider */}
      <div className="mx-3 hidden h-4 w-px bg-border-faint lg:block" />

      {/* New chat (quiet action) */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex h-8 items-center gap-1.5 rounded-[8px] border border-transparent px-2.5 text-[13px] font-medium text-text-secondary transition-colors duration-150 hover:border-border-faint hover:bg-white/[0.04] hover:text-text-primary"
      >
        <Plus className="h-3.5 w-3.5" strokeWidth={1.75} />
        <span className="hidden sm:inline">New chat</span>
      </motion.button>

      {/* Account */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="ml-1.5 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-border-subtle bg-surface-3 text-[10px] font-semibold text-text-secondary"
      >
        A
      </motion.div>
    </motion.header>
  )
}