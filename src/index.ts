import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import App from './App.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]
const router = createRouter({ history: createWebHistory(), routes })

const app = createApp(App)
app.use(router)
app.mount('#app')

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
    app.unmount('#app')
  })
}
