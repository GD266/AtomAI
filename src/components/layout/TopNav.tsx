import { motion } from 'framer-motion'
import { Menu, Plus, Search } from 'lucide-react'
import type { SectionId } from '@/lib/navigation'
import { NAV_SECTIONS, NAV_FOOTER } from '@/lib/navigation'
import { cubicEasing, quickConfig, standardConfig } from '@/lib/motion'

type TopNavProps = {
  active: SectionId
  onMenuOpen: () => void
  onNewChat: () => void
}

export function TopNav({ active, onMenuOpen, onNewChat }: TopNavProps) {
  const section = [...NAV_SECTIONS, ...NAV_FOOTER].find(
    (item) => item.id === active,
  )

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: cubicEasing }}
      className="relative z-30 flex h-[52px] shrink-0 items-center border-b border-border-faint bg-background/60 px-[26px] backdrop-blur-xl lg:px-[42px]"
    >
      <motion.button
        type="button"
        onClick={onMenuOpen}
        aria-label="Open navigation"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={quickConfig}
        className="mr-2.5 flex h-8 w-8 items-center justify-center rounded-[8px] text-text-tertiary hover:text-text-secondary lg:hidden"
      >
        <Menu className="h-4 w-4" strokeWidth={1.75} />
      </motion.button>

      <motion.span
        initial={{ opacity: 0, x: -4 }}
        animate={{ opacity: 1, x: 0 }}
        transition={standardConfig}
        className="truncate text-[13px] font-medium text-text-secondary"
      >
        {section?.label ?? 'Home'}
      </motion.span>

      <div className="flex-1" />

      <motion.button
        type="button"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.985 }}
        transition={quickConfig}
        className="hidden h-8 w-44 items-center gap-1.5 rounded-[8px] border border-border-faint bg-white/[0.025] px-2.5 text-[13px] text-text-quiet lg:flex lg:w-52 xl:w-60"
      >
        <Search className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
        <span className="truncate">Search…</span>
        <kbd className="ml-auto shrink-0 rounded-[4px] border border-border-faint bg-black/35 px-1.5 py-px text-[10px] text-text-quiet">
          ⌘K
        </kbd>
      </motion.button>

      <div className="mx-3 h-4 w-px bg-border-faint" />

      <motion.button
        type="button"
        onClick={onNewChat}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.985 }}
        transition={quickConfig}
        className="flex items-center gap-1.5 rounded-[8px] border border-border-faint bg-white/[0.02] px-2.5 text-[13px] font-medium text-text-tertiary"
      >
        <Plus className="h-3.5 w-3.5" strokeWidth={1.75} />
        <span className="hidden sm:inline">New chat</span>
      </motion.button>

      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={quickConfig}
        className="ml-1.5 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-border-faint text-[10px] font-semibold text-text-secondary"
      >
        A
      </motion.div>
    </motion.header>
  )
}