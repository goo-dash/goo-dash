
export default {
  name: 'link',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((response) => {
        this.$store.commit('setSession', {authed: true, email: response.email})
        this.$emit('loginsuccess', true)
      }).catch((error) => {
        // eslint-disable-next-line
        Materialize.toast(`Login failed: ${error.message}`, 10000)
      });
    }
  },
};
