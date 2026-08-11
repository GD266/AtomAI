import { useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AmbientBackground } from '@/components/background/AmbientBackground'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopNav } from '@/components/layout/TopNav'
import type { SectionId } from '@/lib/navigation'
import { cn } from '@/lib/utils'

type AppShellProps = {
  children: ReactNode
}

const sidebarVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.32,
      ease: [0.2, 0, 0, 1] as const,
      when: "beforeChildren",
      staggerChildren: 0.04,
      delayChildren: 0.04,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0 },
}

const panelVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.2, 0, 0, 1] as const },
  },
}

export function AppShell({ children }: AppShellProps) {
  const [active, setActive] = useState<SectionId>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSelect = (id: SectionId) => {
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <div className="relative flex h-svh overflow-hidden bg-background text-text-primary">
      <AmbientBackground />

      {/* Desktop sidebar */}
      <motion.div
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 hidden lg:block"
      >
        <Sidebar
          active={active}
          onSelect={handleSelect}
          itemVariants={itemVariants}
        />
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="absolute inset-0 z-30 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              className="absolute inset-y-0 left-0 z-40 lg:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{
                type: 'tween',
                duration: 0.28,
                ease: [0.2, 0, 0, 1],
              }}
            >
              <Sidebar
                active={active}
                onSelect={handleSelect}
                className="h-full w-66 border-r border-glass-border"
                itemVariants={itemVariants}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main column */}
      <motion.div
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          'relative z-10 flex min-w-0 flex-1 flex-col',
          menuOpen && 'lg:blur-sm',
        )}
      >
        <TopNav active={active} onMenuOpen={() => setMenuOpen(true)} />
        <main className="relative flex-1 overflow-y-auto">{children}</main>
      </motion.div>
    </div>
  )
}
