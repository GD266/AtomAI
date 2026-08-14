export const cubicEasing = [0.25, 0.1, 0.25, 1] as const

export const springConfig = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 36,
}

export const microDuration = 0.08
export const quickDuration = 0.12
export const standardDuration = 0.18
export const modalDuration = 0.24
export const pageDuration = 0.32

export const microConfig = { duration: microDuration, ease: cubicEasing }
export const quickConfig = { duration: quickDuration, ease: cubicEasing }
export const standardConfig = { duration: standardDuration, ease: cubicEasing }
export const modalConfig = { duration: modalDuration, ease: cubicEasing }
export const pageConfig = { duration: pageDuration, ease: cubicEasing }

export const pageVariants = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: pageDuration, ease: cubicEasing },
  },
}

export const drawerSlideIn = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: modalDuration, ease: cubicEasing },
}

export const modalBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: standardDuration, ease: cubicEasing },
}

export const railActiveIndicator = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 34,
}

export const activeBounce = {
  scale: 1.03,
  transition: { duration: 0.1, ease: cubicEasing },
}

export type MotionConfig = typeof microConfig