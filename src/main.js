import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import uviewPlus, { setConfig } from "uview-plus";
import Echart from "@/components/Echart.vue";
window.wx = undefined;
export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
  app.use(pinia);
  app.use(uviewPlus);
  app.component("Echart", Echart);
  setConfig({
    // 修改$u.config对象的属性
    config: {
      // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
      unit: "rpx",
    },
  });
  return {
    app,
  };
}
