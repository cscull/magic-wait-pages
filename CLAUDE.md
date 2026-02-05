# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for the **MagicWait** mobile app. No build system, no dependencies, no tests — just plain HTML served via Firebase Hosting.

## App Description

MagicWait is a free, real-time Walt Disney World wait times and park companion app for iPhone and Apple Watch. It gives Disney World guests live wait times, Lightning Lane pricing, park hours, weather, crowd levels, and ride tracking for all 4 parks — Magic Kingdom, EPCOT, Hollywood Studios, and Animal Kingdom. It tracks 200+ attractions including rides, shows, meet & greets, and walkthrough experiences.

**Pricing:** 100% free, ad-supported with tasteful banner and native ads. No premium tier or paywalls.

**Platforms:** iPhone (iOS 18.2+), Apple Watch (watchOS 11.2+). Built natively with SwiftUI.

**Data Source:** Real-time data from [ThemeParks.wiki](https://themeparks.wiki), a free, community-maintained API with crowdsourced wait times updated continuously.

### Supported Parks

1. Magic Kingdom (50+ attractions)
2. EPCOT (40+ attractions)
3. Hollywood Studios (35+ attractions)
4. Animal Kingdom (35+ attractions)

### Core Features

- **Real-Time Wait Times** — Live updates every few minutes, color-coded status (Operating/green, Down/orange, Closed/gray, Refurbishment/purple), pull-to-refresh, offline support with cached data
- **Lightning Lane Tracking** — Free Multi-Pass and paid Individual LL availability, current pricing and return windows, dedicated dashboard with sort by price or availability
- **Smart Filtering & Search** — Filter by type (rides, shows, LL available, favorites), wait time ranges (0-15, 15-30, 30-60, 60+ min), ridden/not ridden status; sort by name or wait time; full-text search
- **Wait Time Alerts** — Push notifications when a ride drops below, rises above, or hits a specific wait time (5-120 min thresholds); server-side checking every 3 minutes, works when app is closed
- **Favorites** — Heart any attraction, grouped by park, unlimited
- **Ride History & Trip Tracking** — Log rides throughout the day, automatic midnight reset (Eastern), organize into trips for multi-day visits, analytics dashboard with total rides, park breakdown, top attractions leaderboard
- **Park Info & Hours** — Today's operating hours, Early Entry, Extended Evening, special events; 7-day schedule lookahead; Multi-Pass pricing per day
- **Weather Integration** — Current conditions via Apple WeatherKit, 8-hour hourly forecast with precipitation chances
- **Crowd Level Indicator** — Auto-calculated from average wait times (Low, Moderate, High, Very High), color-coded
- **Show Times & Reminders** — Scheduled showtimes for shows, parades, fireworks; local notification reminders
- **Attraction Detail View** — Full-screen detail with large wait time display, LL pricing, showtimes grid, quick actions (log ride, set alert, favorite)

### Design & Branding

- **Primary Color:** Navy Blue (`#1a365d`)
- **Accent Color:** Gold (`#d4af37`)
- **Style:** Clean, modern, Disney-inspired with glassmorphism effects
- **Park-specific color themes:** Magic Kingdom (purple/gold), EPCOT (teal/silver), Hollywood Studios (red/amber), Animal Kingdom (green/earth)
- **Dark mode:** Full support
- **Navigation:** 5-tab layout — Wait Times, Park Info, Favorites, (center placeholder), Settings

### Accessibility

- Full VoiceOver support
- Dynamic type support
- Haptic feedback on all interactions
- WCAG AA color contrast

### Differentiators vs. Competitors

1. Completely free — no subscriptions or premium locks
2. Smart filtering — filter by wait time range, LL status, ridden status, and favorites simultaneously
3. Wait time alerts — notifications when a ride drops to your target wait
4. Ride history tracking — log rides and organize into trips with analytics
5. Dual Lightning Lane display — both free Multi-Pass and paid Individual LL info
6. Crowd level calculation — automatic assessment from live data
7. Offline-first — works with cached data when connectivity is spotty
8. Native Apple design — built with SwiftUI, not a web wrapper

### Website Pages (Planned)

- **Landing/Home** — Hero section, feature highlights, app screenshots, download CTA
- **Features** — Detailed breakdown of each major feature (or sections on landing page)
- **About** — What MagicWait is, data source, developer info
- **Privacy Policy** — Already exists (`index.html`)
- **Terms of Service** — Already exists
- **Contact/Support** — Link to in-app feedback or email support@magicwait.com
- **App Store download badge** — Link TBD

## Structure

- `index.html` — Privacy policy page (inline CSS, no JavaScript frameworks)
- `app-ads.txt` — Google AdSense publisher verification (pub-2074748727233015)

## Development

```bash
# Local preview
python3 -m http.server 8000
# or
npx http-server

# Deploy
firebase deploy
```

## Key Details

- Privacy policy was generated via [App Privacy Policy Generator](https://app-privacy-policy-generator.nisrulz.com/)
- The app uses Google AdMob and Firebase Analytics
- Some policy sections use `display:none` to hide inapplicable clauses (e.g., geo-location)
- All work happens on the `main` branch
