import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const isDev = mode !== "production";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: isDev ? ["check-prop-types"] : [],
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
});
