import { ChatWorkspace } from '@/components/chat/ChatWorkspace'
import type { ChatMessage } from '@/types/chat'

type ChatsProps = {
  messages: ChatMessage[]
  isResponding: boolean
  onSend: (content: string) => void
}

export function Chats({ messages, isResponding, onSend }: ChatsProps) {
  return <ChatWorkspace messages={messages} isResponding={isResponding} onSend={onSend} />
}
