import { motion } from 'framer-motion'
import { Atom, Shield, Zap } from 'lucide-react'

const FEATURES = [
  { icon: Zap, label: 'Fast' },
  { icon: Shield, label: 'Local-first' },
  { icon: Atom, label: 'Private' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.2, 0, 0, 1] as const,
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
}

const itemFadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
}

const featureHover: {
  rest: { scale: 1 }
  hover: { scale: 1.04, y: -1 }
} = {
  rest: { scale: 1 },
  hover: { scale: 1.04, y: -1 },
}

export function Home() {
  return (
    <div className="flex min-h-full items-center justify-center px-6 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full max-w-2xl flex-col items-center text-center"
      >
        <motion.div
          variants={itemFadeUp}
          transition={{ duration: 0.32, ease: [0.2, 0, 0, 1] }}
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-glass-border-strong bg-glass shadow-inner-glass"
        >
          <Atom className="h-7 w-7 text-accent" strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          variants={itemFadeUp}
          transition={{ duration: 0.32, ease: [0.2, 0, 0, 1] }}
          className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl"
        >
          Atom AI
        </motion.h1>

        <motion.p
          variants={itemFadeUp}
          transition={{ duration: 0.32, ease: [0.2, 0, 0, 1] }}
          className="mt-4 max-w-md text-text-tertiary"
        >
          Your AI workspace. Built with Tauri and React for a fast, local-first
          experience.
        </motion.p>

        <motion.div
          variants={itemFadeUp}
          transition={{ duration: 0.32, ease: [0.2, 0, 0, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.label}
                className="flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-2 text-sm text-text-secondary"
                whileHover="hover"
                whileTap={{ scale: 0.96 }}
                variants={featureHover}
                transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Icon
                  className="h-3.5 w-3.5 text-accent"
                  strokeWidth={1.75}
                />
                <span className="relative">{feature.label}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
