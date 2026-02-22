# Project: Hongqi Premium Model Experience (MVP)

## Objective & Context
Create a high-end, "digital showroom" experience for Hongqi. The goal is to move away from legacy automotive UI toward a minimalist, tech-forward "VibeCoding" aesthetic that prioritizes high-quality media, smooth transitions, and a mobile-first (90% traffic) conversion funnel.

## User Roles
| Role | Permissions |
| :--- | :--- |
| **Guest** | View models, use configurator, browse gallery, submit test-drive leads. |
| **Lead (Customer)** | Save configurations to "Favorites," compare models, track inquiry status. |
| **Admin** | Manage model specifications, update media assets, export lead data. |

## Core Entities
- **VehicleModel**: Name, Series (H, HS, E, L), base price, hero 3D/video assets.
- **Configuration**: User-selected ColorID, TrimID, WheelID.
- **Specification**: Categorized data (Performance, Dimensions, Battery/Engine).
- **Inquiry**: Lead data (Name, Phone, Preferred Dealer, Model).

## User Flows
1. **The Hero Entrance**: User lands on a cinematic auto-play video. Scroll triggers a smooth transition into the 360° Configurator.
2. **Interactive Configuration**: User toggles colors/wheels. UI updates instantly with framer-motion transitions.
3. **Deep Specification**: A "sticky" specs comparison table that remains readable on mobile.
4. **The Conversion (CTA)**: One-tap access to "Test Drive" or "Stock Inventory" via a floating action glass-dock.

## UI Inventory
| Component | Purpose | States |
| :--- | :--- | :--- |
| `GlassNavbar` | Premium navigation with blur. | Transparent -> Blurred on scroll. |
| `VibeConfigurator` | Real-time color/trim switcher. | Loading (skeleton), Active, Error. |
| `SpecsAccordion` | Deep technical data drill-down. | Collapsed/Expanded. |
| `LeadModal` | High-conversion contact form. | Input, Validating, Success. |
| `MediaParallax` | High-res gallery with motion. | Hover/Tap magnification. |