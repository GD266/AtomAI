export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Near-black base with a single broad cool gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 760px at 50% -14%, rgb(255 255 255 / 0.028), transparent 60%), radial-gradient(980px 640px at 92% 114%, rgb(147 167 196 / 0.026), transparent 62%), radial-gradient(820px 520px at 4% 98%, rgb(147 167 196 / 0.016), transparent 60%)',
        }}
      />

      {/* Soft center light behind the workspace */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(640px 420px at 50% 30%, rgb(255 255 255 / 0.02), transparent 65%)',
          filter: 'blur(56px)',
        }}
      />

      {/* Faint cool glow along the top band */}
      <div
        className="absolute inset-x-0 top-0 h-[340px]"
        style={{
          background:
            'linear-gradient(to bottom, rgb(147 167 196 / 0.028), transparent)',
          filter: 'blur(72px)',
        }}
      />

      {/* Vignette — pulls the edges back to black */}
      <div
        className="absolute inset-0"
        style={{
          boxShadow: 'inset 0 0 200px 60px rgb(0 0 0 / 0.3)',
        }}
      />
    </div>
  )
}