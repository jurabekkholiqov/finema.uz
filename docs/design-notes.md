# Finema Landing Page - Design Notes & Biomio Reference Analysis

## 1. Brand & Aesthetic Overview
- **Reference**: https://biomio.ru/ (analyzed via reference structure & layout capture)
- **Target Audience**: Families in Uzbekistan seeking premium, safe, high-quality, and cost-effective household cleaning products.
- **Brand Mood**: Clean, natural, reassuring, calm, warm organic modernism.
- **Color Palette (Finema Specific)**:
  - **Primary Brand Green**: `#1B6B2F` (Deep foliage green, used for primary actions, dark accent blocks, section headers, footer)
  - **Fresh Light Accent Green**: `#8CC63F` (Vibrant leaf green for highlights, subtle badges, hover accents)
  - **Warm Soft Cream (Background)**: `#FBF6EE` (Warm linen background giving an eco-friendly, gentle home feeling)
  - **Secondary Cream (Alternating Sections)**: `#F3EBDD` (Slightly deeper warm tone for alternating section backgrounds)
  - **Soft Mint Card Background**: `#E6F2E8` (Light mint for mission cards and highlight containers)
  - **Dark Text**: `#1E2A22` (Deep charcoal green for crisp readability without harsh black contrast)
  - **Accent Gold/Yellow**: `#F2C230` (Used sparingly for eco badges, callouts, stars)

---

## 2. Typography Specification
- **Primary Font**: `Plus Jakarta Sans` or `Montserrat` paired with `Inter` (supports Latin, Latin Extended for Uzbek `oʻ`, `gʻ`, `ʼ`, and Cyrillic for Russian).
- **Type Hierarchy**:
  - **Hero H1**: 
    - Desktop: `52px` – `64px` (`3.5rem` – `4rem`), line-height `1.15`, weight `700` (Bold), letter-spacing `-0.02em`.
    - Mobile: `36px` – `42px` (`2.25rem` – `2.625rem`), line-height `1.2`.
  - **Section H2**:
    - Desktop: `36px` – `44px` (`2.25rem` – `2.75rem`), line-height `1.2`, weight `700`, letter-spacing `-0.015em`.
    - Mobile: `28px` – `32px` (`1.75rem` – `2rem`).
  - **Card Title H3**:
    - `20px` – `24px` (`1.25rem` – `1.5rem`), line-height `1.3`, weight `600` (Semi-bold).
  - **Small Uppercase Section Label** (e.g. "BREND HAQIDA", "NEGA FINEMA"):
    - `12px` – `13px` (`0.75rem` – `0.8125rem`), weight `700`, uppercase, letter-spacing `0.12em` (`tracking-wider`), color `#1B6B2F` or `#8CC63F`.
  - **Body Text**:
    - `16px` – `18px` (`1rem` – `1.125rem`), line-height `1.6`, weight `400` / `500`, color `#1E2A22/80`.
  - **Button Text**:
    - `15px` – `16px` (`0.9375rem` – `1rem`), weight `600` (Semi-bold), letter-spacing `0.01em`.
  - **Nav / Language Switcher**:
    - `14px` – `15px` (`0.875rem` – `0.9375rem`), weight `600`.

---

## 3. Spacing Rhythm, Grid & Layout System
- **Container Max Width**: `1280px` (`max-w-7xl` in Tailwind CSS) with responsive horizontal padding (`px-4 sm:px-6 lg:px-8`).
- **Section Vertical Padding**:
  - Desktop: `py-20 lg:py-28` (`80px` – `112px` top/bottom gap between major sections).
  - Mobile: `py-14 sm:py-16` (`56px` – `64px`).
- **Grid Layouts**:
  - **Why Finema (3 Principles)**: 3-column grid (`grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8`).
  - **Products Grid**: Biomio asymmetric grid structure:
    - Row 1: Large header/intro card (beside text) + 3 category cards (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`).
    - Row 2: 2 wider category cards (`grid-cols-1 md:grid-cols-2 gap-6`).
  - **Advantages (6 Icons)**: 6 icon cards arranged in 2 rows x 3 columns (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6`).
  - **Values (4 Columns)**: 4 numbered columns `01` – `04` (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8`).
  - **Where to Buy**: 3 prominent dark green/white action cards (`grid-cols-1 md:grid-cols-3 gap-6`).
- **Border Radii Hierarchy**:
  - Main Cards: `rounded-3xl` (`24px` – `32px`).
  - Small Elements / Badges: `rounded-full` (`9999px`).
  - Buttons: `rounded-full` or `rounded-2xl` (`16px`).
  - Modal Containers: `rounded-3xl` (`28px`).
- **Shadows & Elevation**:
  - Cards: `shadow-[0_8px_30px_rgb(0,0,0,0.04)]` (ultra-soft warm ambient shadow).
  - Card Hover: `shadow-[0_20px_40px_rgb(27,107,47,0.12)]` (soft green ambient glow).
  - Sticky Header: `backdrop-blur-md bg-[#FBF6EE]/85 shadow-sm border-b border-[#E6DEC9]`.

---

## 4. Micro-Interactions & Animation Specs (Framer Motion)
- **Hero Entrance**:
  - Fade in + slide up from `y: 30px` to `y: 0`, `duration: 0.8s`, `ease: [0.22, 1, 0.36, 1]`.
  - Staggered sequence: Badge (0.1s) -> H1 (0.2s) -> Subtitle (0.3s) -> Buttons (0.4s) -> Hero Image / Card (0.5s).
- **Scroll Reveal (Viewport Intersection)**:
  - Standard section reveal: `initial={{ opacity: 0, y: 35 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-80px" }}`, `transition={{ duration: 0.7, ease: "easeOut" }}`.
  - Stagger children: `delay: index * 0.1s`.
- **Card Hover States**:
  - Elevation shift: `y: -6px` smoothly.
  - Image scale: `scale-105` inside `overflow-hidden` container (`transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)`).
- **Sticky Header Behavior**:
  - Transparent overlay at top (`top-0 z-50 absolute` -> transition to `fixed top-0` with glassmorphic background upon scrolling down > 50px).
- **Scroll Hint ("LIstaYTE" / "PASTGA SURING")**:
  - Gentle vertical bouncing indicator at bottom of hero (`animate={{ y: [0, 8, 0] }}` repeating indefinitely with `duration: 2s`).
- **Full-Width Banner**:
  - Slight parallax scroll effect or steady pinned background with overlay typography slide-in.

---

## 5. Compliance with Finema Requirements
- Multi-language support (Uzbek UZ default, Russian RU, English EN).
- Direct Telegram integration for orders with pre-filled localized messages containing exact product & volume details.
- Full responsive design for desktop, tablet, and mobile (tested at 375px, 768px, 1440px).
