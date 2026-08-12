import { useState } from 'react'
import { AppShell } from '@/layouts/AppShell'
import { Home } from '@/pages/Home'
import type { SectionId } from '@/lib/navigation'

function App() {
  const [active, setActive] = useState<SectionId>('home')

  return (
    <AppShell active={active} onSelect={setActive}>
      <Home active={active} />
    </AppShell>
  )
}

export default App