# System Architecture

## Architecture Style: Modular Feature-Based
We use a **Feature-Sliced Design** approach within the Next.js `app/` directory to keep the complex Configurator logic separate from static marketing content.

## Rendering Policy
- **Static Side Generation (SSG)**: For Model landing pages (SEO optimization).
- **Client Components**: Strictly for `features/configurator`, `features/gallery` where Framer Motion and state (Zustand) are required.
- **Server Actions**: Used for all form submissions to minimize client-side JS.

## API & Data Layer
- **ORM**: Drizzle ORM for type-safe interaction with PostgreSQL.
- **State Management**: `Zustand` for the Configurator state.
- **Validation**: `Zod` for schema validation.

## Constraints
1. **Mobile-First Implementation**: All layouts must be verified at 430px width before 1920px.
2. **Performance**: All images must use `next/image` with WebP/AVIF. LCP must be under 1.2s.
3. **Animations**: No "pop-in" elements. Every component must have an initial/animate state.