import { useEffect, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Atom } from 'lucide-react'
import { Composer } from '@/components/chat/Composer'
import { MessageGroup } from '@/components/chat/MessageGroup'
import { TypingIndicator } from '@/components/chat/TypingIndicator'
import { groupMessages } from '@/lib/chat'
import { quickConfig, standardConfig } from '@/lib/motion'
import type { ChatMessage } from '@/types/chat'

const SUGGESTIONS = ['Plan my week ahead', 'Explain a complex idea', 'Summarize a long document']

type ChatWorkspaceProps = {
  messages: ChatMessage[]
  isResponding: boolean
  onSend: (content: string) => void
}

function ChatEmptyState({ onPick }: { onPick: (prompt: string) => void }) {
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={standardConfig}
        className="flex flex-col items-center"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border-faint bg-white/[0.02] text-text-tertiary">
          <Atom className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <h2 className="mt-5 text-[19px] font-semibold tracking-[-0.01em] text-text-primary">
          What can I help you with?
        </h2>
        <p className="mt-1.5 max-w-[300px] text-center text-[13px] leading-relaxed text-text-tertiary">
          Local-first workspace. Replies are simulated until a model is connected.
        </p>
        <div className="mt-7 flex max-w-md flex-wrap items-center justify-center gap-2">
          {SUGGESTIONS.map((prompt) => (
            <motion.button
              key={prompt}
              type="button"
              onClick={() => onPick(prompt)}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={quickConfig}
              className="prompt-chip prompt-chip-hover"
            >
              <span className="truncate">{prompt}</span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export function ChatWorkspace({ messages, isResponding, onSend }: ChatWorkspaceProps) {
  const groups = useMemo(() => groupMessages(messages), [messages])
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, isResponding])

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div
          className={
            'mx-auto flex w-full max-w-[720px] min-h-full flex-col gap-10 px-6 py-10 sm:px-8 ' +
            (groups.length === 0 ? 'justify-center' : '')
          }
        >
          {groups.length === 0 ? (
            <ChatEmptyState onPick={onSend} />
          ) : (
            groups.map((group) => <MessageGroup key={group.id} group={group} />)
          )}

          {isResponding && <TypingIndicator />}
          <div ref={bottomRef} className="h-px w-full" />
        </div>
      </div>

      <div className="shrink-0 pb-6 pt-2">
        <Composer onSend={onSend} />
      </div>
    </div>
  )
}
