# MagicWait Website Design

## Overview

Single-page marketing website for the MagicWait iOS app, with separate privacy policy and terms pages. Hosted on Vercel at magicwait.com.

**Goal:** Showcase MagicWait's features in an elegant, premium, Disney-inspired design that funnels visitors toward the App Store download.

## Tech Stack

- **Framework:** Next.js 15 (App Router), TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel
- **Animations:** CSS-only scroll-triggered fade-ins, gold sparkle particles, hover effects

## Project Structure

```
magicwait-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Single-page home (all sections)
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy
│   └── terms/
│       └── page.tsx        # Terms of service
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ParkCards.tsx
│   ├── Features.tsx
│   ├── Screenshots.tsx
│   ├── WatchSection.tsx
│   ├── FreeCallout.tsx
│   ├── DownloadCTA.tsx
│   └── Footer.tsx
├── public/
│   ├── screenshots/        # App screenshots (placeholder slots)
│   ├── app-icon.png        # App icon (placeholder)
│   └── app-ads.txt         # Google AdSense verification
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Visual Design

### Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary background | Deep navy | `#0a1628` |
| Section alternate | Navy | `#0f1f3a` |
| Card backgrounds | Mid navy | `#1a365d` |
| Accent / CTAs | Gold | `#d4af37` |
| Heading text | White | `#ffffff` |
| Body text | Soft gray | `#94a3b8` |

### Park Theme Colors

| Park | Primary | Secondary |
|------|---------|-----------|
| Magic Kingdom | Purple `#7c3aed` | Gold `#d4af37` |
| EPCOT | Teal `#0d9488` | Silver `#c0c0c0` |
| Hollywood Studios | Red `#dc2626` | Amber `#f59e0b` |
| Animal Kingdom | Green `#16a34a` | Earth `#92400e` |

### Typography

- **Headings:** Inter (bold) — clean, modern sans-serif
- **Body:** Inter (regular)
- **Accent text:** Gold color or gold underline treatment

### Visual Touches

- Glassmorphism cards (semi-transparent + backdrop blur) echoing the app's SwiftUI design
- Subtle radial gold glow behind hero phone mockup
- Thin gold border lines and dividers
- Gold gradient CTA buttons with hover glow
- Scroll-triggered fade-up animations (CSS-only)
- Faint gold sparkle particles in hero (CSS-only, lightweight)
- Section alternation between navy shades (no hard dividers)

## Sections (in scroll order)

### 1. Navbar
- Sticky with blur backdrop
- Left: MagicWait logo/wordmark
- Center: Section links (Parks, Features, Screenshots, Watch)
- Right: "Download Free" gold button → App Store
- Mobile: Hamburger menu

### 2. Hero
- Full viewport height, centered layout
- Small gold badge: "Walt Disney World Companion"
- Heading: **"Your Magic Starts Here"**
- Subheading: "Real-time wait times, Lightning Lane pricing, and ride tracking for all 4 Disney World parks. Free forever."
- App Store download badge
- iPhone mockup with placeholder screenshot on gold radial glow
- Faint animated gold sparkle particles

### 3. Park Cards
- Heading: **"All 4 Parks. 200+ Attractions."**
- 4 horizontal cards (stack on mobile)
- Each card uses park's color theme as gradient border/accent
- Content: Park name, attraction count
- Glassmorphism style

### 4. Features
- Heading: **"Everything You Need in the Parks"**
- 6 feature cards in 3-column grid (single column mobile)
- Each card: icon, title, one-line description
- Cards:
  1. Live Wait Times — "Real-time updates for every ride, show, and meet & greet"
  2. Lightning Lane Tracking — "Multi-Pass and Individual LL pricing and availability"
  3. Wait Time Alerts — "Get notified when your favorite ride drops to your target wait"
  4. Ride History — "Log every ride and track your trips with analytics"
  5. Park Hours & Weather — "Operating hours, forecasts, and crowd levels at a glance"
  6. Smart Filters — "Filter by wait time, type, LL status, and ridden status"
- Glassmorphism cards with gold icon accent
- Fade-up on scroll

### 5. Screenshots
- Heading: **"See It in Action"**
- Horizontal scrollable row of 4-5 iPhone mockup frames
- Placeholder slots for real screenshots
- Shadow and tilt on hover
- Swipeable carousel on mobile

### 6. Apple Watch
- Distinct section with subtle gold gradient band background
- Watch mockup on one side, text on other
- Heading: **"On Your Wrist"**
- Body: "Check wait times without pulling out your phone. MagicWait on Apple Watch gives you live wait times and favorites right on your wrist."
- App Store badge

### 7. "100% Free" Callout
- Centered text, gold border top and bottom
- Heading: **"Completely Free. No Catches."**
- Body: "No subscriptions. No premium tiers. No paywalls. MagicWait gives you everything — wait times, alerts, Lightning Lane tracking, ride history — without spending a dime."
- Three small icons: No Ads Wall / No Sign-Up Required / No In-App Purchases

### 8. Final Download CTA
- Subtle gold gradient background
- Heading: **"Ready for Your Next Disney Day?"**
- Large App Store download badge
- "Available for iPhone and Apple Watch"

### 9. Footer
- Dark navy, three columns:
  - Left: MagicWait wordmark + one-line description
  - Center: Privacy Policy, Terms of Service, Support (mailto:support@magicwait.com)
  - Right: "Data provided by ThemeParks.wiki" + social links (TBD)
- Bottom bar: "© 2025 MagicWait. Not affiliated with The Walt Disney Company."

## Assets Needed from User

### Must-have
1. App icon — high-res PNG (1024x1024)
2. App Store link URL
3. iPhone screenshots (4-6): wait times list, Lightning Lane dashboard, attraction detail, ride history, park info
4. Apple Watch screenshots (1-2)

### Nice-to-have
5. Logo/wordmark (will create with typography if not provided)
6. OG image for social sharing (can generate from design)

### Not needed
- Park photos (gradients + brand colors avoid Disney IP issues)
- Feature icons (icon library)
- Background images (navy gradients + gold accents)

## Separate Pages

### Privacy Policy
- Migrated from current `index.html`
- Styled to match site design (navy background, white text)
- Same navbar and footer

### Terms of Service
- Same styling as privacy policy
- Content TBD (user to provide)
