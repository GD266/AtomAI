export type ChatRole = 'user' | 'assistant'

export type ChatMessage = {
  id: string
  role: ChatRole
  content: string
  timestamp: number
}

export type MessageGroup = {
  id: string
  userMessages: ChatMessage[]
  responses: ChatMessage[]
}

export type ChatApi = {
  messages: ChatMessage[]
  isResponding: boolean
  send: (content: string) => void
  clear: () => void
}
