import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [react(), basicSsl()], // Add basicSsl() to enable HTTPS
  base: "/", 
  build: {
    outDir: "dist", // ✅ Ensure Vite outputs to "dist/"
  },
  server: {
    https: true, // Enable HTTPS for the development server
  },
});
