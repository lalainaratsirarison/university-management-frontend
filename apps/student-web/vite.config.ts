import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@university/ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@university/hooks": path.resolve(__dirname, "../../packages/hooks/src"),
      "@university/utils": path.resolve(__dirname, "../../packages/utils/src"),
      "@university/types": path.resolve(__dirname, "../../packages/types/src"),
      "@university/api-client": path.resolve(__dirname, "../../packages/api-client/src"),
    },
  },
  server: {
    port: 5174,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});