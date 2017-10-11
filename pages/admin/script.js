import axios from 'axios';
import GooLink from '@/components/GooLink/GooLink';
import Login from '@/components/Login/Login';
import config from '@/utils/config';

export default {
  name: 'admin-dashboard',
  components: {
    GooLink,
    Login
  },
  data() {
    return {
      approvedLinks: [],
      pendingLinks: [],
      isLoggedIn: false
    };
  },
  methods: {
    updateLink(link, status) {
      link.status = status
      axios.put(`${config.apiUrl}/links/${link.id}`, link).then((response) => {
        // eslint-disable-next-line
        Materialize.toast(`Link ${status} success!`, 10000)
      }).catch(() => {
        // eslint-disable-next-line
        Materialize.toast('Oops, links could not be loaded, please refresh your page or try again later.', 10000)
      })
    },

    handleLoginSuccess(result) {
      if (result) {
        this.loadLinks();
        this.isLoggedIn = result;
        $(document).ready(function(){
          $('ul.tabs').tabs();
        });
      }
    },

    loadLinks() {
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
  },
  created() {
    this.isLoggedIn = this.$store.state.session.valid;
    if (this.isLoggedIn) {
      this.loadLinks();
    }
  },
  mounted(){
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });

    if(this.isLoggedIn) {
      this.loadLinks();
    }
  }
};
