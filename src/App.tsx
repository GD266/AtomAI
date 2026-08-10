import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

function App() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background">
      <motion.div
        className="glass-elevated flex flex-col items-center gap-6 rounded-2xl p-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="rounded-full border border-glass-strong p-4">
          <Brain className="h-8 w-8 text-accent" />
        </div>
        <h1 className="text-4xl font-bold">
          Atom AI
        </h1>
        <p className="text-muted-2 text-center max-w-md">
          A premium AI assistant built with Tauri and React.
        </p>
      </motion.div>
    </div>
  )
}

export default App
