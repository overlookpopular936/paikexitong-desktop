import antfu from "@antfu/eslint-config"

export default antfu({
  vue: true,
  rules: {
    "vue/html-self-closing": "off",
    "no-console": "off",
  },
  stylistic: {
    semi: true,
    quotes: "double",
  },
  ignores: ['src-tauri/**', 'vite.config.ts', 'eslint.config.ts', 'package.json', 'src/assets', 'node_modules', '*.md', '.vscode', 'src/vite-env.d.ts', 'tsconfig.*', 'src/components.d.ts', 'src/auto-imports.d.ts'],
})
