import axios from 'axios'
import GooLink from '@/components/GooLink/GooLink'

export default {
  name: 'contributore',
  components: {
    GooLink
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
    submit(link) {
      let url = 'https://us-central1-goodash-8856b.cloudfunctions.net/api/links/';
      axios({
        method: 'post',
        url: url,
        data: link,
      }).then(function(response){
        this.$router.push('/');
      }).catch(function(err) {
        console.log(err);
      })
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