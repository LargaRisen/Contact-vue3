import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import jQuery from "jquery"; // Import jQuery avoid error $ is not defined

import "tailwindcss/tailwind.css";

const app = createApp(App);
app.mount("#app");
