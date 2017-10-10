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
    validateBeforeSubmit(link) {
      let router = this.$router;
      let validator = this.$validator;
      this.$validator.validateAll().then(x => {
        console.log(this.$validator.errors.items);
        console.log(x);
        if(!x){
          return;
        }
        else {
          let url = 'https://us-central1-goodash-8856b.cloudfunctions.net/api/links/';
          axios({
            method: 'post',
            url: url,
            data: link,
          }).then(function(response){
            cosole.log(response);
            if(response.status == 201) {
              router.push('/');
              Materialize.toast('Thanks for contributing', 4000);
            }
            else if(response.status == 400){
              const error = {
                field:"url",
                id:"_jfp0gbni4",
                msg:"The url already exists.",
                rule:"required",
                scope:null
              }
              validator.errors.push(error);
            }
            else {
              Materialize.toast('Something wrong happened, please try again later.', 4000);
            }
          }).catch(function(err) {
            console.log(err);
          });
        }
      }).catch(e => {
        console.log(e)
      })
    },
    submit(link) {
      console.log('posting');
      let url = 'https://us-central1-goodash-8856b.cloudfunctions.net/api/links/';
      axios({
        method: 'post',
        url: url,
        data: link,
      }).then(function(response){
        this.$router.push('/');
        Materialize.toast('Thanks for contributing', 4000);
      }).catch(function(err) {
        console.log(err);
      });
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