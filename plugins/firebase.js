import Vue from 'vue'
import Firebase from 'firebase'

const firebasePlugin = {
  install () {
    if (Vue.__nuxt_firebase_installed__) {
      return
    }
    Vue.__nuxt_firebase_installed__ = true

    if (!Vue.prototype.$firebase) {
      Vue.prototype.$firebase = Firebase.initializeApp({
        apiKey: 'AIzaSyAZZA5d_jMxupbVIe9AloS-qp_O9KQDleQ',
        authDomain: 'goodash-8856b.firebaseapp.com',
        databaseURL: 'https://goodash-8856b.firebaseio.com',
        projectId: 'goodash-8856b',
        storageBucket: 'goodash-8856b.appspot.com',
        messagingSenderId: '134960709990'
      })
    }
  }

}

Vue.use(firebasePlugin)

export default (ctx) => {
  const { app, store } = ctx

  app.$firebase = Vue.prototype.$firebase
  ctx.$firebase = Vue.prototype.$firebase
  if (store) {
    store.$firebase = Vue.prototype.$firebase
  }
}
