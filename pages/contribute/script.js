import axios from 'axios'
import GooLink from '@/components/GooLink/GooLink'

export default {
  name: 'contributore',
  data () {
    return {
    }
  },
  methods: {
    imageUrl (event) {
      var input = event.target;

      var vm = $('#image_preview');
      vm.attr('src', input.value);
    },
    imageUpload (event) {
      var input = event.target;
      if(input.files && input.files[0]) {
        var reader = new FileReader();

        var vm = $('#image_preview');

        reader.onload = function(e) {
          vm.attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
      }
    },
  },
  created () {
  }
}