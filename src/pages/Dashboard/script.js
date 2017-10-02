import axios from 'axios';
import GooLink from '@/components/GooLink/GooLink';

export default {
  name: 'dashboard',
  components: {
    GooLink,
  },
  data() {
    return {
      apiUrl: 'https://us-central1-goodash-8856b.cloudfunctions.net/api/links',
      colChunkSize: 4,
      displayLinks: [],
      showLinks: false,
    };
  },
  methods: {
    calcColumnClass(linkGroup) {
      return [
        'col',
        's12',
        `m${12 / linkGroup.length}`,
      ];
    },

    prepLinks() {
      axios.get(this.apiUrl)
      .then((response) => {
        for (let i = 0; i < response.data.length; i += this.colChunkSize) {
          const tempItems = response.data.slice();
          this.displayLinks.push(tempItems.splice(i, (this.colChunkSize)));
        }
        this.showLinks = true;
      })
      .catch((error) => {
        console.log(error);
        // eslint-disable-next-line
        Materialize.toast('Oops, links could not be loaded, please refresh your page...', 10000);
      });
    },
  },
  created() {
    this.prepLinks();
  },
};
