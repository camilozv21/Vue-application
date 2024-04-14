import { createApp } from 'vue'
import router from './router'
import store from './store'
import './style.css'
import App from './App.vue'
// import 'bootstrap/dist/css/bootstrap.css' // Importa los estilos CSS de Bootstrap
// import 'bootstrap/dist/js/bootstrap.bundle' // Importa los scripts de Bootstrap

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
