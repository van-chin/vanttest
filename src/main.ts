import { createApp } from 'vue'
import Vant from "Vant"
import App from './App.vue'

// import "vant/lib/index.less";

// import 'vant/lib/index.less'

import "./assets/styles/index.less";

// import 'vant/lib/index.css';

createApp(App).use(Vant).mount('#app')
