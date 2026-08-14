import { motion } from 'framer-motion'
import { Atom, ArrowUp, ArrowUpRight, MessageSquare, Plus } from 'lucide-react'
import type { SectionId } from '@/lib/navigation'

const PROMPTS = ['Summarize a long document', 'Plan my week ahead', 'Explain a complex idea']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.2, 0, 0, 1] as const,
      staggerChildren: 0.055,
      delayChildren: 0.06,
    },
  },
}

const itemFadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

function Hero() {
  return (
    <div className="flex min-h-full flex-col justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-[560px] flex-col items-center"
      >
        {/* Brand */}
        <motion.div
          variants={itemFadeUp}
          className="mb-9 flex items-center gap-2.5"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-[8px] border border-border-faint bg-white/[0.02] text-text-tertiary">
            <Atom className="h-[13px] w-[13px]" strokeWidth={1.75} />
          </div>
          <span className="text-[11px] font-medium tracking-[0.025em] uppercase text-text-quiet">
            atom ai
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemFadeUp}
          className="text-center text-[36px] font-semibold leading-[1.12] tracking-[-0.02em] text-text-primary sm:text-[44px]"
        >
          What can I help you
          <br />
          with today?
        </motion.h1>

        <motion.p
          variants={itemFadeUp}
          className="mt-4 max-w-xs text-center text-[14px] leading-relaxed text-text-secondary"
        >
          Write, plan, and build locally. No account, no cloud.
        </motion.p>

        {/* Composer */}
        <motion.div
          variants={itemFadeUp}
          className="mt-10 w-full"
        >
          <div className="group relative flex h-[48px] items-center gap-2.5 rounded-[12px] border border-border-subtle bg-surface-raised/90 px-3.5 shadow-sm transition-colors duration-200">
            <span className="pointer-events-none flex-1 text-left text-[14px] text-text-quiet">
              Ask Atom AI anything…
            </span>

            <button
              type="button"
              aria-label="Voice"
              className="flex h-8 w-8 items-center justify-center rounded-[8px] text-text-quiet transition-colors duration-150 hover:bg-overlay-subtle hover:text-text-secondary"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 2 0-14 0h14z" />
                <path d="M12 14v3m0 3h.01M12 14v-3m-2-3h4" strokeWidth={1.5} />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Send"
              className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white/10 text-white transition-colors duration-150 hover:bg-white/15"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          {/* Prompts */}
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {PROMPTS.map((p) => (
              <button key={p} type="button" className="prompt-chip prompt-chip-hover">
                <span className="truncate">{p}</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 h-1 w-1 rounded-full bg-[#6fbf8f]" />
      </motion.div>
    </div>
  )
}

function Empty() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border-faint text-text-tertiary">
          <MessageSquare className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <h2 className="mt-5 text-[17px] font-semibold text-text-primary">No conversations yet</h2>
        <p className="mt-2 text-[13px] text-text-tertiary">Ask anything and it will appear here.</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 flex items-center gap-1.5 rounded-[10px] border border-border-subtle bg-white/[0.02] px-4 py-2 text-[13px] text-text-tertiary transition-colors duration-150 hover:border-border-quiet hover:bg-white/[0.05] hover:text-text-secondary"
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={2} />
          Start a chat
        </motion.button>
      </motion.div>
    </div>
  )
}

const RUNTIME_ROWS = [
  { label: 'Local inference', value: 'Not configured' },
  { label: 'GPU acceleration', value: 'Off' },
  { label: 'Model directory', value: '~/models/atom' },
  { label: 'Telemetry', toggle: true },
]

function Models() {
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <h2 className="text-[17px] font-semibold text-text-primary">Runtime</h2>
        <p className="mt-1 text-[13px] text-text-tertiary">Configure local model execution.</p>

        <div className="mt-6 divide-y divide-border-faint border-y border-border-faint">
          {RUNTIME_ROWS.map((r) => (
            <div key={r.label} className="flex h-11 items-center justify-between py-2.5">
              <span className="text-[13px] text-text-secondary">{r.label}</span>
              {r.toggle ? (
                <div className="h-[18px] w-8 rounded-full bg-white/[0.08] p-[2px]">
                  <div className="h-[14px] w-[14px] rounded-full bg-text-tertiary" />
                </div>
              ) : (
                <span className="text-[12px] text-text-quiet">{r.value}</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function Settings() {
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <h2 className="text-[17px] font-semibold text-text-primary">Settings</h2>
        <p className="mt-1 text-[13px] text-text-tertiary">Your local preferences.</p>

        <div className="mt-6 divide-y divide-border-faint border-y border-border-faint">
          <div className="flex h-11 items-center justify-between py-2.5">
            <span className="text-[13px] text-text-secondary">Theme</span>
            <span className="text-[12px] text-text-quiet">System</span>
          </div>
          <div className="flex h-11 items-center justify-between py-2.5">
            <span className="text-[13px] text-text-secondary">Reduce motion</span>
            <div className="h-[18px] w-8 rounded-full bg-white/[0.08] p-[2px]">
              <div className="h-[14px] w-[14px] rounded-full bg-text-tertiary" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function Home({ active }: { active: SectionId }) {
  switch (active) {
    case 'chats':
      return <Empty />
    case 'models':
      return <Models />
    case 'settings':
      return <Settings />
    default:
      return <Hero />
  }
}