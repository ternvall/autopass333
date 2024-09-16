import packageJson from './package.json'

const jsn = (value: string) => JSON.stringify(value)

// Don't forget to add your added variables to vite-env.d.ts also!

// These variables are available in your Vue components and will be replaced by their values at build time.
// These will be compiled into your app. Don't store secrets here!

export const defineViteConfig = {
  __VERSION__: jsn(packageJson.version),
  __NAME__: jsn(packageJson.name),
  __DISPLAY_NAME__: jsn(packageJson.displayName),
}
