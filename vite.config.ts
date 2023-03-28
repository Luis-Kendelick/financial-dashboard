import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  plugins: [react(), tsconfigPaths(), svgr()],
  css: {
    postcss: path.resolve(__dirname, "./postcss.config.cjs"),
  },
});
