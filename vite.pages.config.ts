import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function pagesAssets() {
  return {
    name: "pages-assets",
    closeBundle() {
      const docs = resolve(import.meta.dirname, "docs");
      mkdirSync(docs, { recursive: true });
      writeFileSync(resolve(docs, ".nojekyll"), "");
      copyFileSync(resolve(import.meta.dirname, "public/favicon.svg"), resolve(docs, "favicon.svg"));
    },
  };
}

export default defineConfig({
  root: resolve(import.meta.dirname, "pages-src"),
  base: "/drive-test/",
  plugins: [react(), tailwindcss(), pagesAssets()],
  build: {
    outDir: resolve(import.meta.dirname, "docs"),
    emptyOutDir: true,
  },
});