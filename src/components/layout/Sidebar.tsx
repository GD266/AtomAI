import { motion } from 'framer-motion'
import { Atom, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_FOOTER, NAV_SECTIONS } from '@/lib/navigation'
import type { SectionId } from '@/lib/navigation'
import type { Variants } from 'framer-motion'

const navItemVariants: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const navItemHover: Variants = {
  rest: { scale: 1, x: 0 },
  hover: { scale: 1.02, x: 2 },
}

type SidebarProps = {
  active: SectionId
  onSelect: (id: SectionId) => void
  className?: string
  itemVariants?: Variants
}

export function Sidebar({
  active,
  onSelect,
  className,
  itemVariants = navItemVariants,
}: SidebarProps) {
  return (
    <motion.aside
      variants={itemVariants}
      className={cn(
        'flex h-full w-66 flex-col gap-6 border-r border-glass-border bg-surface-panel px-4 py-5 backdrop-blur-[20px]',
        className,
      )}
    >
      {/* Brand */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-3 px-3"
      >
        <motion.div
          className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-glass-border-strong bg-accent-subtle shadow-inner-glass"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Atom
            className="h-4.5 w-4.5 text-accent"
            strokeWidth={1.75}
          />
          <div className="absolute inset-0 rounded-xl bg-accent-subtle blur-md" />
        </motion.div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight text-text-primary">
            Atom AI
          </span>
          <span className="text-micro text-text-tertiary">Workspace</span>
        </div>
      </motion.div>

      {/* Primary action */}
      <motion.div variants={itemVariants}>
        <motion.button
          type="button"
          className="group flex items-center gap-3 rounded-xl border border-glass-border bg-glass px-3 py-2.5 text-sm font-medium text-text-primary backdrop-blur-[20px] transition-all duration-250 hover:border-glass-border-strong hover:bg-glass-hover"
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          variants={navItemHover}
          initial="rest"
          animate="rest"
        >
          <ChevronDown
            className="h-4 w-4 text-accent transition-transform duration-250 group-hover:rotate-180"
            strokeWidth={1.75}
          />
          Default Workspace
        </motion.button>
      </motion.div>

      {/* Nav */}
      <nav className="relative flex flex-1 flex-col gap-1 overflow-y-auto">
        {NAV_SECTIONS.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id as SectionId)}
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              variants={navItemHover}
              initial="rest"
              animate="rest"
              transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
              className={cn(
                'group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-all duration-250',
                isActive
                  ? 'bg-glass-strong text-text-primary shadow-glass border border-glass-border-strong'
                  : 'hover:bg-glass-hover hover:text-text-primary',
              )}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-lg border border-glass-border-strong bg-accent-subtle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(100, 180, 255, 0.05) 0%, transparent 100%)',
                  }}
                />
              )}
              <span
                className={cn(
                  'relative flex h-4 w-4 items-center justify-center',
                  isActive
                    ? 'text-accent'
                    : 'text-text-tertiary group-hover:text-text-secondary',
                )}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="relative">{item.label}</span>
            </motion.button>
          )
        })}
      </nav>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-1"
      >
        {NAV_FOOTER.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id as SectionId)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
              className={cn(
                'relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-all duration-250',
                isActive
                  ? 'bg-glass-strong text-text-primary shadow-glass border border-glass-border-strong'
                  : 'hover:bg-glass-hover hover:text-text-primary',
              )}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-lg border border-glass-border-strong bg-accent-subtle"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(100, 180, 255, 0.05) 0%, transparent 100%)',
                  }}
                />
              )}
              <Icon
                className={cn(
                  'h-4 w-4',
                  isActive
                    ? 'text-accent'
                    : 'text-text-tertiary group-hover:text-text-secondary',
                )}
                strokeWidth={1.75}
              />
              <span className="relative">{item.label}</span>
            </motion.button>
          )
        })}
        <div className="mt-2 flex items-center gap-3 border-t border-glass-border px-3 pt-4">
          <motion.div
            className="flex h-8 w-8 items-center justify-center rounded-full border border-glass-border-strong bg-glass text-micro font-semibold text-text-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A
          </motion.div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium text-text-primary">
              Atom User
            </span>
            <span className="text-micro text-text-tertiary">
              Local profile
            </span>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  )
}
