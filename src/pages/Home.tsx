import { motion } from 'framer-motion'
import { ArrowUp, ArrowUpRight, Atom, MessageSquare, Mic, Plus } from 'lucide-react'
import type { SectionId } from '@/lib/navigation'

const PROMPTS = [
  'Summarize a long document',
  'Plan my week ahead',
  'Explain a complex idea',
]

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

const itemMotion = {
  transition: { duration: 0.32, ease: [0.2, 0, 0, 1] as const },
}

function Hero() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 pb-24 pt-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full max-w-[640px] flex-col items-center"
      >
        {/* Brand */}
        <motion.div
          variants={itemFadeUp}
          {...itemMotion}
          className="mb-8 flex items-center gap-2.5"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-[8px] border border-border-faint bg-white/[0.03] text-text-secondary">
            <Atom className="h-[13px] w-[13px]" strokeWidth={1.75} />
          </div>
          <span className="text-[12px] font-medium tracking-tight text-text-quiet">
            ATOM AI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemFadeUp}
          {...itemMotion}
          className="text-center text-[34px] font-semibold leading-[1.14] tracking-[-0.025em] text-text-primary sm:text-[40px]"
        >
          What can I help you
          <br />
          with today?
        </motion.h1>

        <motion.p
          variants={itemFadeUp}
          {...itemMotion}
          className="mt-4 max-w-md text-center text-[14px] leading-relaxed text-text-secondary"
        >
          Write, plan, and build in a private local workspace. No account, no
          cloud — just your machine.
        </motion.p>

        {/* Composer (visual placeholder) */}
        <motion.div
          variants={itemFadeUp}
          {...itemMotion}
          className="mt-10 w-full"
        >
          <div className="group relative flex h-[48px] items-center gap-2.5 rounded-[12px] border border-border-subtle bg-surface-raised pl-4 pr-2 shadow-soft-md transition-colors duration-200 hover:border-border">
            {/* Prompt text (decorative) */}
            <span
              className="pointer-events-none flex-1 select-none truncate text-left text-[14px] text-text-quiet"
              aria-hidden
            >
              Ask Atom AI anything…
            </span>

            {/* Mic (decorative) */}
            <button
              type="button"
              aria-label="Voice input"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] text-text-quiet transition-colors duration-150 hover:bg-overlay-subtle hover:text-text-secondary"
            >
              <Mic className="h-4 w-4" strokeWidth={1.75} />
            </button>

            {/* Send (decorative) */}
            <button
              type="button"
              aria-label="Send"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-white/[0.06] text-text-secondary transition-colors duration-150 hover:bg-white/[0.1] hover:text-text-primary"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>

          {/* Starter prompts */}
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="flex items-center justify-between gap-2 rounded-[10px] border border-border-faint bg-white/[0.02] px-3.5 py-2.5 text-left text-[13px] text-text-tertiary transition-colors duration-150 hover:border-border-subtle hover:bg-white/[0.045] hover:text-text-secondary"
              >
                <span className="truncate">{prompt}</span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 shrink-0 text-text-quiet"
                  strokeWidth={1.75}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

function EmptyChats() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
        className="flex flex-col items-center"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-border-faint bg-surface-raised text-text-tertiary edge-light">
          <MessageSquare className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <h2 className="mt-5 text-[17px] font-semibold tracking-tight text-text-primary">
          No conversations yet
        </h2>
        <p className="mt-1.5 text-[13px] text-text-tertiary">
          Start a conversation and it will appear here.
        </p>
        <button
          type="button"
          className="mt-6 flex h-8 items-center gap-1.5 rounded-[8px] border border-border-faint px-3.5 text-[13px] font-medium text-text-secondary transition-colors duration-150 hover:border-border-subtle hover:bg-white/[0.04] hover:text-text-primary"
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={1.75} />
          Start a chat
        </button>
      </motion.div>
    </div>
  )
}

const RUNTIME_ROWS = [
  { label: 'Local inference', value: 'Not configured' },
  { label: 'GPU acceleration', value: 'Off' },
  { label: 'Model directory', value: '~/models/atom' },
  { label: 'Telemetry', value: '', toggle: true },
]

function Models() {
  return (
    <div className="mx-auto max-w-xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
      >
        <h2 className="text-[17px] font-semibold tracking-tight text-text-primary">
          Runtime
        </h2>
        <p className="mt-1 text-[13px] text-text-tertiary">
          Configure how Atom AI runs models on your machine.
        </p>

        <div className="mt-6 divide-y divide-border-faint border-y border-border-faint">
          {RUNTIME_ROWS.map((row) => (
            <div key={row.label} className="flex h-11 items-center justify-between">
              <span className="text-[13px] text-text-secondary">{row.label}</span>
              {row.toggle ? (
                <div className="h-[18px] w-8 rounded-full bg-white/[0.08] p-[2px]">
                  <div className="ml-auto h-[14px] w-[14px] rounded-full bg-text-quiet/70" />
                </div>
              ) : (
                <span className="text-[12px] text-text-quiet">{row.value}</span>
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
    <div className="mx-auto max-w-xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
      >
        <h2 className="text-[17px] font-semibold tracking-tight text-text-primary">
          Settings
        </h2>
        <p className="mt-1 text-[13px] text-text-tertiary">
          Manage your preferences and local profile.
        </p>

        {/* Profile */}
        <div className="mt-6 flex items-center gap-3 rounded-[12px] border border-border-faint bg-surface-raised/60 p-4 edge-light">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-surface-3 text-[12px] font-semibold text-text-secondary">
            A
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[14px] font-medium text-text-primary">Atom User</p>
            <p className="text-[12px] text-text-quiet">Local profile</p>
          </div>
          <span className="text-[12px] text-accent">Manage</span>
        </div>

        {/* Appearance */}
        <div className="mt-4 divide-y divide-border-faint border-y border-border-faint">
          {[
            { label: 'Theme', value: 'System' },
            { label: 'Reduce motion', value: '', toggle: true },
            { label: 'Sidebar density', value: 'Compact' },
          ].map((row) => (
            <div key={row.label} className="flex h-11 items-center justify-between">
              <span className="text-[13px] text-text-secondary">{row.label}</span>
              {row.toggle ? (
                <div className="h-[18px] w-8 rounded-full bg-white/[0.08] p-[2px]">
                  <div className="ml-auto h-[14px] w-[14px] rounded-full bg-text-quiet/70" />
                </div>
              ) : (
                <span className="text-[12px] text-text-quiet">{row.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* About */}
        <p className="mt-5 text-center text-[11px] text-text-quiet">
          Atom AI v0.1.0 · Built local-first with Tauri and React
        </p>
      </motion.div>
    </div>
  )
}

export function Home({ active }: { active: SectionId }) {
  switch (active) {
    case 'chats':
      return <EmptyChats />
    case 'models':
      return <Models />
    case 'settings':
      return <Settings />
    default:
      return <Hero />
  }
}