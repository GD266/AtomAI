import { motion } from 'framer-motion'
import { Menu, Plus, Search } from 'lucide-react'
import type { SectionId } from '@/lib/navigation'
import { NAV_SECTIONS, NAV_FOOTER } from '@/lib/navigation'

type TopNavProps = {
  active: SectionId
  onMenuOpen: () => void
}

export function TopNav({ active, onMenuOpen }: TopNavProps) {
  const section = [...NAV_SECTIONS, ...NAV_FOOTER].find(
    (item) => item.id === active,
  )

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
      className="relative z-30 flex h-[52px] shrink-0 items-center border-b border-border-faint bg-background/60 px-[26px] backdrop-blur-xl lg:px-[42px]"
    >
      {/* Mobile menu */}
      <motion.button
        type="button"
        onClick={onMenuOpen}
        aria-label="Open navigation"
        whileTap={{ scale: 0.92 }}
        transition={{ duration: 0.12 }}
        className="mr-2.5 flex h-8 w-8 items-center justify-center rounded-[8px] text-text-tertiary transition-colors duration-150 hover:bg-overlay-subtle hover:text-text-secondary lg:hidden"
      >
        <Menu className="h-4 w-4" strokeWidth={1.75} />
      </motion.button>

      {/* Section label */}
      <span className="truncate text-[13px] font-medium text-text-secondary">
        {section?.label ?? 'Home'}
      </span>

      {/* Spacer */}
      <div className="mx-2.5 hidden h-4 w-px bg-border-faint lg:block" />

      {/* Centered search */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
        <motion.button
          type="button"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className="flex h-8 items-center gap-1.5 rounded-[8px] border border-border-faint bg-white/[0.025] px-2.5 text-[13px] text-text-quiet transition-colors duration-150 hover:border-border-subtle hover:bg-white/[0.04] hover:text-text-tertiary"
        >
          <Search className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span className="truncate max-w-[180px] md:max-w-[220px]">
            Search...
          </span>
          <kbd className="ml-1.5 rounded-[4px] border border-border-faint bg-black/35 px-1.5 py-px text-[10px] text-text-quiet">
            ⌘K
          </kbd>
        </motion.button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* New chat */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.12 }}
        className="flex items-center gap-1.5 rounded-[8px] border border-border-faint bg-white/[0.02] px-2.5 text-[13px] font-medium text-text-tertiary transition-colors duration-150 hover:border-border-subtle hover:bg-white/[0.04] hover:text-text-secondary"
      >
        <Plus className="h-3.5 w-3.5" strokeWidth={1.75} />
        <span className="hidden sm:inline">New chat</span>
      </motion.button>

      {/* Account */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.12 }}
        className="ml-1.5 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-border-faint text-[10px] font-semibold text-text-secondary"
      >
        A
      </motion.div>
    </motion.header>
  )
}