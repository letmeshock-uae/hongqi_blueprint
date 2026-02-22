# Design Tokens & Vibe Mapping

## Color Palette (Hongqi Obsidian)
- `background`: `#050505`
- `surface`: `#0A0A0A`
- `primary`: `#8C0000`
- `accent`: `#C0C0C0`
- `glass-stroke`: `rgba(255, 255, 255, 0.08)`

## Glassmorphism
- **Effect**: `backdrop-blur-xl` (24px)
- **Border**: 1px solid `glass-stroke`

## Shadows
- `shadow-vibe-sm`: `0 4px 10px rgba(0,0,0,0.5)`
- `shadow-vibe-lg`: `0 20px 40px rgba(0,0,0,0.8)`

## Animations (Framer Motion)
```typescript
export const VIBE_SPRING = { type: "spring", stiffness: 260, damping: 20 };
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};
```