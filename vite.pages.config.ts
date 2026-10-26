import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: resolve(import.meta.dirname, "pages-src"),
  base: "/drive-test/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: resolve(import.meta.dirname, "docs"),
    emptyOutDir: true,
  },
});
