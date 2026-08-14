export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* ===== Layer 1: Near-black base with subtle charcoal gradients ===== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 760px at 50% -8%, rgb(10 10 13 / 0.028), transparent 58%), radial-gradient(1000px 660px at 88% 114%, rgb(155 175 200 / 0.022), transparent 60%), radial-gradient(860px 540px at 6% 94%, rgb(135 160 200 / 0.015), transparent 58%)',
        }}
      />

      {/* ===== Layer 2: Center workspace depth (slowest drift, gentle opacity) ===== */}
      <div
        className="ambient-drift-a ambient-breathe absolute inset-0"
        style={{
          background:
            'radial-gradient(720px 480px at 50% 30%, rgb(255 255 255 / 0.016), transparent 62%)',
          filter: 'blur(72px)',
        }}
      />

      {/* ===== Layer 3: Soft gray-blue atmospheric glow - upper left (drifts) ===== */}
      <div
        className="ambient-drift-b absolute inset-0"
        style={{
          background:
            'radial-gradient(640px 420px at 18% 12%, rgb(160 180 220 / 0.019), transparent 64%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ===== Layer 4: Subtle colored atmospheric glow - lower right (slower drift) ===== */}
      <div
        className="ambient-drift-c absolute inset-0"
        style={{
          background:
            'radial-gradient(600px 400px at 84% 88%, rgb(185 195 230 / 0.021), transparent 66%)',
          filter: 'blur(76px)',
        }}
      />

      {/* ===== Layer 5: Depth behind the icon rail ===== */}
      <div
        className="ambient-breathe absolute inset-y-0 left-0 w-[180px]"
        style={{
          background:
            'linear-gradient(to right, rgb(160 180 220 / 0.018), transparent 76%)',
        }}
      />

      {/* ===== Layer 6: Depth behind the top navigation ===== */}
      <div
        className="ambient-breathe absolute inset-x-0 top-0 h-[160px]"
        style={{
          background:
            'linear-gradient(to bottom, rgb(255 255 255 / 0.016), transparent)',
        }}
      />

      {/* ===== Layer 7: Gentle vignette to keep edges deep black ===== */}
      <div
        className="absolute inset-0"
        style={{
          boxShadow: 'inset 0 0 200px 64px rgb(0 0 0 / 0.36)',
        }}
      />
    </div>
  )
}