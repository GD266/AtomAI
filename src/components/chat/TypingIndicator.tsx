import { motion } from 'framer-motion'
import { Atom } from 'lucide-react'
import { standardConfig } from '@/lib/motion'

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={standardConfig}
      className="flex w-full items-center gap-2"
    >
      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-[6px] border border-border-faint bg-white/[0.02] text-text-tertiary">
        <Atom className="h-[10px] w-[10px]" strokeWidth={1.75} />
      </div>
      <span className="text-[11px] font-medium tracking-[0.02em] uppercase text-text-quiet">
        Atom
      </span>
      <div className="flex items-center gap-1 px-1.5 py-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1 w-1 rounded-full bg-text-tertiary"
            animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.18,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
