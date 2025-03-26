import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [vue(), tailwindcss(),svgLoader()],
  server: {
    host: '0.0.0.0', 
    port: 5173, 
  }
  
});