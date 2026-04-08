import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
import { viteObfuscateFile } from "vite-plugin-obfuscator";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteObfuscateFile({
      // Only obfuscate during production build (npm run build)
      include: ["src/**/*.ts", "src/**/*.tsx"],
      apply: "build",
      options: {
        // Compact output (single line)
        compact: true,
        // Control flow flattening makes code logic nearly impossible to follow
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        // Dead code injection adds fake code to confuse readers
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        // Rename variables and functions to unreadable strings
        identifierNamesGenerator: "hexadecimal",
        // Rename global variables
        renameGlobals: false,
        // Transform strings into encoded arrays
        stringArray: true,
        stringArrayThreshold: 0.75,
        stringArrayEncoding: ["base64"],
        // Self-defending: code breaks if reformatted (anti-beautify)
        selfDefending: true,
        // Disable console output in production
        disableConsoleOutput: true,
      },
    }),
  ],
});
