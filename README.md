# Autopass

Chrome Extension MV3 for dating apps.
Lets you set up criteria for automatic next'ing unwanted profiles.

## Technologies:

- Based off [vite-vue3-browser-extension-v3](https://github.com/mubaidr/vite-vue3-browser-extension-v3)
  - pnpm (package management)
  - Vite  (bundle js)
  - Vue 3 (framework)
  - Vuetify 3 (componenets)
  - pinia (store)
  - Material Design Icons (icons)
  - Tailwind (readability)



## Project Setup
 - `pnpm i`
 - `pnpm build`
 - `pnpm dev:chrome `

_Activate Developer mode in chrome://extensions/ and Load unpacked extension..., choose dist._

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build extension
- `pnpm lint` - Lint files

_You can also use pnpm dev:chrome, pnpm dev:firefox, pnpm build:chrome, pnpm build:firefox, pnpm lint:fix_

### Extra info

In [src/background/index.ts](./src/background/index.ts) you can find an example of chrome.runtime.onInstalled.addListener.
