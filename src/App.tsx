import { useCallback, useState } from 'react'
import { AppShell } from '@/layouts/AppShell'
import { useChat } from '@/hooks/useChat'
import { Home } from '@/pages/Home'
import type { SectionId } from '@/lib/navigation'

function App() {
  const [active, setActive] = useState<SectionId>('home')
  const chat = useChat()

  const handleAsk = useCallback(
    (prompt: string) => {
      chat.send(prompt)
      setActive('chats')
    },
    [chat],
  )

  const handleNewChat = useCallback(() => {
    chat.clear()
    setActive('chats')
  }, [chat])

  return (
    <AppShell active={active} onSelect={setActive} onNewChat={handleNewChat}>
      <Home active={active} chat={chat} onAsk={handleAsk} />
    </AppShell>
  )
}

export default App
