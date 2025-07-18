import presetWind4 from "@unocss/preset-wind4";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig, presetIcons } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  content: {
    pipeline: {
      exclude: ["node_modules", "dist", ".vscode", "public", "build", "src-tauri"],
    },
  },
  presets: [
    presetWind4({
      dark: {
        dark: "[data-theme='dark']",
        light: "[data-theme='light']",
      },
      preflights: {
        reset: true,
      },
    }),
    presetIcons({}),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    "flex-center": "flex justify-center items-center",
  },
});
