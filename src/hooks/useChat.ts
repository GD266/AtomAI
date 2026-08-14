import { useCallback, useEffect, useRef, useState } from 'react'
import type { ChatApi, ChatMessage } from '@/types/chat'

const CANNED_RESPONSES = [
  `I'm listening — and since no inference engine is connected yet, this is a placeholder reply from the workspace itself. The full loop is live though: your message landed in the conversation, grouped with this response, and the composer below is ready for the next one.`,
  `Got it. Right now Atom AI runs as a local shell: no account, no cloud, and no model attached. This reply is simulated — but the conversation area, message grouping, and entrance transitions you're seeing are the real thing.`,
  `Noted. Once a local model is wired in, replies will flow here from the running engine. For now you're looking at the native chat surface: plain typography, generous spacing, and messages that sit in the workspace rather than inside heavy cards.`,
]

let idCounter = 0
const nextId = () => `msg-${Date.now()}-${idCounter++}`

export function useChat(): ChatApi {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isResponding, setIsResponding] = useState(false)
  const responseIndex = useRef(0)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  const send = useCallback((content: string) => {
    const text = content.trim()
    if (!text) return

    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: 'user', content: text, timestamp: Date.now() },
    ])
    setIsResponding(true)

    timer.current = setTimeout(() => {
      const reply = CANNED_RESPONSES[responseIndex.current % CANNED_RESPONSES.length]
      responseIndex.current += 1
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: 'assistant', content: reply, timestamp: Date.now() },
      ])
      setIsResponding(false)
    }, 950)
  }, [])

  const clear = useCallback(() => {
    if (timer.current) clearTimeout(timer.current)
    setMessages([])
    setIsResponding(false)
  }, [])

  return { messages, isResponding, send, clear }
}
