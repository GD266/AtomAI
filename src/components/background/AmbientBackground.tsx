export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Deep black base with subtle charcoal gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 30%, rgba(10, 10, 12, 0.55) 0%, transparent 60%), radial-gradient(ellipse at 90% 85%, rgba(5, 5, 7, 0.35) 0%, transparent 60%)',
        }}
      />

      {/* Subtle accent gradient orbs (very low opacity) */}
      <div
        className="absolute -top-52 -left-52 h-[460px] w-[460px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(100, 180, 255, 0.06), transparent 60%)',
          filter: 'blur(64px)',
        }}
      />
      <div
        className="absolute -right-56 bottom-[-14rem] h-[480px] w-[480px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.025), transparent 65%)',
          filter: 'blur(72px)',
        }}
      />

      {/* Faint grid for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(900px 600px at 50% 0%, black 0%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(900px 600px at 50% 0%, black 0%, transparent 75%)',
        }}
      />
    </div>
  )
}
