import { createStore } from 'vuex'
import user from './modules/user.js'
import event from './event'

export default createStore({
  modules: {
    user,
    event
  }
})