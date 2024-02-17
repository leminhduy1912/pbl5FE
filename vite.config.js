import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      "process.env": import.meta.env,
    },
    // Other configuration options
  };
});
