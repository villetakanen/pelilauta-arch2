import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase/app'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'
import App from './App.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]
const router = createRouter({ history: createWebHistory(), routes })

interface FirebaseEnv {
  SNOWPACK_PUBLIC_FIREBASE_API_KEY: string,
  SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN: string,
  SNOWPACK_PUBLIC_FIREBASE_DATASE_URL: string,
  SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID: string
  SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET: string,
  SNOWPACK_PUBLIC_FIREBASE_MESSAGE_SENDER_ID: string,
  SNOWPACK_PUBLIC_FIREBASE_APP_ID: string
}

const env:FirebaseEnv = import.meta.env as FirebaseEnv

const config = {
  apiKey: env.SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.SNOWPACK_PUBLIC_FIREBASE_DATASE_URL,
  projectId: env.SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.SNOWPACK_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: env.SNOWPACK_PUBLIC_FIREBASE_APP_ID
}
firebase.initializeApp(config)

firebase.auth().onAuthStateChanged((user) => {
  console.log('authStateChanged', user)
})

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
