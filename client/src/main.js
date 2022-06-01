import VueLogger from 'vuejs3-logger'
import { createApp } from 'vue'
import App from './App.vue'

/* eslint-disable */
const options = {
    isEnabled: true,
    logLevel : 'debug',
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : false,
    separator: '|',
    showConsoleColors: true
};

createApp(App)
.use(VueLogger, options)
.mount('#app')
