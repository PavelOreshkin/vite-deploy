import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

/**
 * for fast refresh
 * @vitejs/plugin-react-swc
 *
 * for react compiler
 * @vitejs/plugin-react
 */

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    svgr(),
  ],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@icons": path.resolve(__dirname, "src/shared/assets/icons"),
    },
  },
  server: {
    port: 3000,
  },
});
