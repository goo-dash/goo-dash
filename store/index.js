import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      session: {
        authed: false,
        email: ''
      }
    },
    mutations: {
      setSession (state, session) {
        state.session = session
      }
    }
  })
}

export default createStore
