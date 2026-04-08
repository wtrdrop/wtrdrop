import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
import { viteObfuscateFile } from "vite-plugin-obfuscator";

export default defineConfig({
  plugins: [
    react(),
    viteObfuscateFile({
      include: ["src/**/*.ts", "src/**/*.tsx"],
      apply: "build",
      options: {
        compact: true,
        controlFlowFlattening: false,      // Disabled: Breaks React hooks
        deadCodeInjection: false,          // Disabled: Causes performance drops
        identifierNamesGenerator: "hexadecimal", // Still scrambles variable names
        renameGlobals: false,
        stringArray: false,                // Disabled: Scrambles CSS class names!
        selfDefending: false,              // Disabled: Breaks strict mode
        disableConsoleOutput: true,        // Hides console logs
      },
    }),
  ],
});
