import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";
import installAntDVue from "./plugins/element.js";

console.log(process.env);
const app = createApp(App);

installAntDVue(app);
app.use(router).mount("#app");
