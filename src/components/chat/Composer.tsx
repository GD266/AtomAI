import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Paperclip } from 'lucide-react'
import { quickConfig } from '@/lib/motion'

type ComposerProps = {
  onSend: (content: string) => void
}

export function Composer({ onSend }: ComposerProps) {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const canSend = value.trim().length > 0

  const submit = () => {
    const text = value.trim()
    if (!text) return
    onSend(text)
    setValue('')
    const el = textareaRef.current
    if (el) el.style.height = 'auto'
  }

  const handleInput = () => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 168) + 'px'
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      submit()
    }
  }

  return (
    <div className="mx-auto w-full max-w-[720px] px-6 sm:px-8">
      <div className="flex items-end gap-1.5 rounded-[18px] border border-border-subtle bg-surface-raised/85 p-1.5 pl-2 backdrop-blur-md transition-colors duration-150 focus-within:border-border-strong">
        <motion.button
          type="button"
          aria-label="Attach"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={quickConfig}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] text-text-quiet transition-colors duration-150 hover:bg-overlay-subtle hover:text-text-secondary"
        >
          <Paperclip className="h-[17px] w-[17px]" strokeWidth={1.75} />
        </motion.button>

        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Ask Atom AI anything…"
          className="max-h-[168px] min-h-[40px] flex-1 resize-none bg-transparent py-2.5 text-[15px] leading-[1.5] text-text-primary outline-none placeholder:text-text-quiet"
        />

        <motion.button
          type="button"
          aria-label="Send"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={quickConfig}
          onClick={submit}
          disabled={!canSend}
          className={
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] transition-colors duration-150 ' +
            (canSend
              ? 'bg-primary text-on-primary'
              : 'bg-white/[0.07] text-text-quiet')
          }
        >
          <ArrowUp className="h-4 w-4" strokeWidth={2} />
        </motion.button>
      </div>

      <p className="mt-3 text-center text-[11px] text-text-quiet">
        Atom AI runs locally — no account, no cloud.
      </p>
    </div>
  )
}
