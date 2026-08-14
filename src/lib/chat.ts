import type { ChatMessage, MessageGroup } from '@/types/chat'

export function groupMessages(messages: ChatMessage[]): MessageGroup[] {
  const groups: MessageGroup[] = []

  for (const message of messages) {
    const last = groups[groups.length - 1]

    if (message.role === 'user') {
      if (last && last.responses.length === 0) {
        last.userMessages.push(message)
      } else {
        groups.push({ id: message.id, userMessages: [message], responses: [] })
      }
    } else if (last) {
      last.responses.push(message)
    }
  }

  return groups
}

export function formatMessageTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
}
