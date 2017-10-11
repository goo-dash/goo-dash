import axios from 'axios';
import GooLink from '@/components/GooLink/GooLink';
import config from '@/utils/config';

export default {
  name: 'admin-dashboard',
  components: {
    GooLink,
  },
  data() {
    return {
      approvedLinks: [],
      pendingLinks: []
    };
  },
  methods: {
    approveLink(link) {
      axios.put(`${config.apiUrl}/links/${link.id}`, link).then((response) => {
        // eslint-disable-next-line
        Materialize.toast('Link Approved!', 10000)
      }).catch(() => {
        // eslint-disable-next-line
        Materialize.toast('Oops, links could not be loaded, please refresh your page or try again later.', 10000)
      })
    }
  },
  mounted(){
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });

    // Get all the links
    axios.get(`${config.apiUrl}/links`).then((response) => {
      for(let i = 0; i < response.data.length; i++){
        if(response.data[i].status === 'approved'){
          this.approvedLinks.push(response.data[i]);
        } else if(response.data[i].status === 'pending'){
          this.pendingLinks.push(response.data[i]);
        }
      }
    }).catch(() => {
      // eslint-disable-next-line
      Materialize.toast('Oops, links could not be loaded, please refresh your page or try again later.', 10000)
    })
  }
};
