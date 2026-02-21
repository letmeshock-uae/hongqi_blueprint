export const VIBE_SPRING = { type: "spring" as const, stiffness: 260, damping: 20 };

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE_OUT },
};

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: EASE_OUT },
};

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: EASE_OUT },
};

export const STAGGER_CONTAINER = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const STAGGER_ITEM = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};
