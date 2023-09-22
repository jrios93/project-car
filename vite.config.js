import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets":
        "/Users/jcbri/OneDrive/Escritorio/memi-project/carsnack-project/src/assets",
      "@components": "/ruta/a/tus/componentes",
      // Define alias adicionales según tus necesidades
    },
  },
});
