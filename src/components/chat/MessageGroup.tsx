import { motion } from 'framer-motion'
import { Atom } from 'lucide-react'
import { formatMessageTime } from '@/lib/chat'
import { standardConfig } from '@/lib/motion'
import type { MessageGroup as MessageGroupType } from '@/types/chat'

type MessageGroupProps = {
  group: MessageGroupType
}

export function MessageGroup({ group }: MessageGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={standardConfig}
      className="flex w-full flex-col gap-3.5"
    >
      {group.userMessages.map((message) => (
        <div key={message.id} className="flex justify-end">
          <div className="max-w-[86%] whitespace-pre-wrap break-words rounded-[16px] rounded-br-[6px] bg-white/[0.06] px-4 py-2.5 text-[15px] leading-[1.7] text-text-primary sm:max-w-[72%] sm:text-base">
            {message.content}
          </div>
        </div>
      ))}

      {group.responses.map((message, index) => (
        <div
          key={message.id}
          className="flex w-full flex-col gap-1.5"
        >
          {index === 0 && (
            <div className="flex items-center gap-2">
              <div className="flex h-[18px] w-[18px] items-center justify-center rounded-[6px] border border-border-faint bg-white/[0.02] text-text-tertiary">
                <Atom className="h-[10px] w-[10px]" strokeWidth={1.75} />
              </div>
              <span className="text-[11px] font-medium tracking-[0.02em] uppercase text-text-quiet">
                Atom
              </span>
              <span className="text-[11px] text-text-quiet/60">
                {formatMessageTime(message.timestamp)}
              </span>
            </div>
          )}
          <p className="whitespace-pre-wrap break-words text-[15px] leading-[1.75] text-text-primary sm:text-base">
            {message.content}
          </p>
        </div>
      ))}
    </motion.div>
  )
}
