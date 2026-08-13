# Typography and Font Manipulation Guide

## Overview
This guide documents all the existing font manipulations, custom typography classes, and custom font families currently scattered across the DOLE-GIP System's `backend` CSS and `frontend` / JS modules. The goal is to catalog these to establish a more generalized, professional, and consistent typography system in the future.

## 1. Custom Font Families
Found primarily in `c:\laragon\www\dole-system\backend\css\main.css`, multiple Google Fonts are explicitly declared:
* **Montserrat**: `font-family: 'Montserrat', 'Gotham', 'Century Gothic', sans-serif;`
* **Inter**: `font-family: 'Inter', sans-serif;`
* **Outfit**: `font-family: 'Outfit', sans-serif;`

## 2. Tailwind CSS Font Families
Various Tailwind classes are used throughout the UI to apply specific font families:
* `font-montserrat`: Used extensively in dialogs, modals, and container wrappers to override base fonts.
* `font-mono`: Used for technical data, like IDs or generated reference numbers.

## 3. Font Weights
The application relies heavily on specific weights to create visual hierarchy:
* `font-black` (900): Used for prominent headings, key metrics, and call-to-actions.
* `font-extrabold` (800): Used for strong emphasis.
* `font-bold` (700): The default for labels, secondary headers, and buttons.
* `font-semibold` (600): Used for tertiary UI elements.
* `font-medium` (500): Standard for form inputs and general UI text.

## 4. Text Sizes
Text sizing is heavily customized using both standard Tailwind classes and arbitrary values:
* **Headings**: `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`
* **Body/UI**: `text-sm`, `text-xs`
* **Micro-copy**: `text-[9px]`, `text-[10px]`, `text-[11px]` (Frequently used for badges, tiny labels, and sub-text)

## 5. Letter Spacing (Tracking)
Letter spacing is aggressively modified, particularly for uppercase text, to create a "premium" or "technical" aesthetic:
* `tracking-tight` / `tracking-tighter`: Often applied to large headings to make them feel more solid.
* `tracking-wider` / `tracking-widest`: Typically paired with `uppercase` and `text-[10px]` for small labels and tags.
* `tracking-[0.2em]`: Hardcoded wide tracking for specific micro-headers.

## 6. Text Transformations and Styles
* `uppercase`: Widely used for badges, table headers, small labels, and buttons.
* `italic`: Used for placeholder text, empty states, and system processing messages.
* `leading-tight` / `leading-none` / `leading-snug`: Adjusted line heights to control vertical rhythm, especially for large metric numbers or tight UI spaces.

## Recommendations for Professional Generalization
To professionalize and standardize the typography:
1. **Unify Font Families**: Choose *one* primary sans-serif (e.g., Inter) for UI/body text, and optionally *one* display font (e.g., Montserrat or Outfit) for headings. Remove the others to reduce payload and visual clutter.
2. **Standardize Micro-copy**: Replace arbitrary sizes like `text-[9px]` or `text-[10px]` with a centralized Tailwind theme extension (e.g., `text-micro`).
3. **Establish Typography Tokens**: Create reusable semantic utility classes (like `.text-label-sm` combining `text-xs uppercase tracking-wider font-bold`) inside `main.css` to reduce inline class bloat in HTML/JS.
