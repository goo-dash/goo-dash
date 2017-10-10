import Vue from 'vue'
import VeeValidate from 'vee-validate'

const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  events: 'input|blur',
  inject: true
}

Vue.use(VeeValidate, config)
