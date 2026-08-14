import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, ArrowUpRight, Atom } from 'lucide-react'
import { ChatWorkspace } from '@/components/chat/ChatWorkspace'
import type { SectionId } from '@/lib/navigation'
import { cubicEasing, quickConfig, standardConfig } from '@/lib/motion'
import type { ChatApi } from '@/types/chat'

const PROMPTS = ['Summarize a long document', 'Plan my week ahead', 'Explain a complex idea']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.32,
      ease: cubicEasing,
      staggerChildren: 0.04,
      delayChildren: 0.04,
    },
  },
}

const itemFadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: standardConfig },
}

function Hero({ onAsk }: { onAsk: (prompt: string) => void }) {
  const [value, setValue] = useState('')
  const canSend = value.trim().length > 0

  const submit = () => {
    const text = value.trim()
    if (!text) return
    onAsk(text)
    setValue('')
  }

  return (
    <div className="mx-auto flex min-h-full w-full max-w-[608px] flex-col justify-center px-6 pb-24 pt-12 sm:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col items-center"
      >
        <motion.div variants={itemFadeUp} className="mb-9 flex items-center gap-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-[8px] border border-border-faint bg-white/[0.02] text-text-tertiary">
            <Atom className="h-[13px] w-[13px]" strokeWidth={1.75} />
          </div>
          <span className="text-[11px] font-medium tracking-[0.025em] uppercase text-text-quiet">
            atom ai
          </span>
        </motion.div>

        <motion.h1
          variants={itemFadeUp}
          className="text-center text-[36px] font-semibold leading-[1.12] tracking-[-0.02em] text-text-primary sm:text-[44px]"
        >
          What can I help you
          <br />
          with today?
        </motion.h1>

        <motion.p variants={itemFadeUp} className="mt-4 max-w-xs text-center text-[14px] leading-relaxed text-text-secondary">
          Write, plan, and build locally. No account, no cloud.
        </motion.p>

        <motion.div variants={itemFadeUp} className="mt-10 w-full">
          <div className="flex h-[48px] items-center gap-2.5 rounded-[12px] border border-border-subtle bg-surface-raised/90 px-3.5 transition-colors duration-150 focus-within:border-border-strong">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  submit()
                }
              }}
              placeholder="Ask Atom AI anything…"
              className="flex-1 bg-transparent text-[14px] text-text-primary outline-none placeholder:text-text-quiet"
            />

            <button
              type="button"
              aria-label="Voice"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] text-text-quiet transition-colors duration-150 hover:bg-overlay-subtle hover:text-text-secondary"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 2 0-14 0h14z" />
                <path d="M12 14v3m0 3h.01M12 14v-3m-2-3h4" strokeWidth={1.5} />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Send"
              onClick={submit}
              disabled={!canSend}
              className={
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] transition-colors duration-150 ' +
                (canSend
                  ? 'bg-white/10 text-white hover:bg-white/15'
                  : 'bg-white/[0.03] text-text-quiet')
              }
            >
              <ArrowUp className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {PROMPTS.map((p) => (
              <motion.button
                key={p}
                type="button"
                onClick={() => onAsk(p)}
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={quickConfig}
                className="prompt-chip prompt-chip-hover"
              >
                <span className="truncate">{p}</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 h-1 w-1 rounded-full bg-[#6fbf8f]" />
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
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={standardConfig}
      >
        <h2 className="text-[17px] font-semibold text-text-primary">Runtime</h2>
        <p className="mt-1 text-[13px] text-text-tertiary">Configure local model execution.</p>

        <div className="mt-6 divide-y divide-border-faint border-y border-border-faint">
          {RUNTIME_ROWS.map((r) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...standardConfig, delay: 0.04 * RUNTIME_ROWS.indexOf(r) }}
              className="flex h-11 items-center justify-between py-2.5"
            >
              <span className="text-[13px] text-text-secondary">{r.label}</span>
              {r.toggle ? (
                <div className="h-[18px] w-8 rounded-full bg-white/[0.08] p-[2px]">
                  <div className="h-[14px] w-[14px] rounded-full bg-text-tertiary" />
                </div>
              ) : (
                <span className="text-[12px] text-text-quiet">{r.value}</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function Settings() {
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={standardConfig}
      >
        <h2 className="text-[17px] font-semibold text-text-primary">Settings</h2>
        <p className="mt-1 text-[13px] text-text-tertiary">Your local preferences.</p>

        <div className="mt-6 divide-y divide-border-faint border-y border-border-faint">
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...standardConfig, delay: 0.04 }}
            className="flex h-11 items-center justify-between py-2.5"
          >
            <span className="text-[13px] text-text-secondary">Theme</span>
            <span className="text-[12px] text-text-quiet">System</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...standardConfig, delay: 0.08 }}
            className="flex h-11 items-center justify-between py-2.5"
          >
            <span className="text-[13px] text-text-secondary">Reduce motion</span>
            <div className="h-[18px] w-8 rounded-full bg-white/[0.08] p-[2px]">
              <div className="h-[14px] w-[14px] rounded-full bg-text-tertiary" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

type HomeProps = {
  active: SectionId
  chat: ChatApi
  onAsk: (prompt: string) => void
}

export function Home({ active, chat, onAsk }: HomeProps) {
  switch (active) {
    case 'chats':
      return (
        <ChatWorkspace
          messages={chat.messages}
          isResponding={chat.isResponding}
          onSend={chat.send}
        />
      )
    case 'models':
      return <Models />
    case 'settings':
      return <Settings />
    default:
      return <Hero onAsk={onAsk} />
  }
}
