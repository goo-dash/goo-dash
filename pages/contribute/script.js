import axios from 'axios'
import GooLink from '@/components/GooLink/GooLink'
import VeeValidate from 'vee-validate';

export default {
  name: 'contributore',
  components: {
    GooLink,
    VeeValidate
  },
  data () {
    return {
      link : {
        backgroundColor: '',
        description: '',
        name: '',
        url: '',
        imageUrl: ''
      }
    }
  },
  methods: {
    validateBeforeSubmit(e) {
      this.$validator.validateAll().then(x => {
        console.log(x)
      }).catch(e => {
        console.log(e)
      })
    },
    submit(link) {
      let url = 'https://us-central1-goodash-8856b.cloudfunctions.net/api/links/';
      Materialize.toast('Thanks for contributing', 4000);
      // axios({
      //   method: 'post',
      //   url: url,
      //   data: link,
      // }).then(function(response){
      //   this.$router.push('/');
      // }).catch(function(err) {
      //   console.log(err);
      // });
    },
    imageUpload (event) {
      let input = event.target;
      if(input.files && input.files[0]) {
        let reader = new FileReader();

        let vm = this.link;
        reader.onload = function(e) {
          vm.imageUrl = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
  created () {
  }
}