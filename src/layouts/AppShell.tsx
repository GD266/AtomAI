import { useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AmbientBackground } from '@/components/background/AmbientBackground'
import { GlassSidebar } from '@/components/layout/GlassSidebar'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopNav } from '@/components/layout/TopNav'
import type { SectionId } from '@/lib/navigation'

type AppShellProps = {
  children: ReactNode
  active: SectionId
  onSelect: (id: SectionId) => void
}

export function AppShell({ children, active, onSelect }: AppShellProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSelect = (id: SectionId) => {
    onSelect(id)
    setMenuOpen(false)
  }

  return (
    <div className="relative flex h-svh overflow-hidden bg-background text-text-primary">
      <AmbientBackground />

      {/* Desktop icon rail */}
      <Sidebar active={active} onSelect={handleSelect} />

      {/* Mobile drawer */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="absolute inset-0 z-30 bg-black/55 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              className="absolute inset-y-0 left-0 z-40 lg:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.26, ease: [0.2, 0, 0, 1] }}
            >
              <GlassSidebar active={active} onSelect={handleSelect} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main column */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        <TopNav active={active} onMenuOpen={() => setMenuOpen(true)} />
        <main className="relative flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}