import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: ["vue", "uni-app"],
      dts: true,
    }),
  ],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
      },
    },
    open: false,
  },
});
