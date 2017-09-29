import axios from 'axios';
import GooLink from '@/components/GooLink/GooLink';

export default {
  name: 'hello',
  components: {
    GooLink,
  },
  data() {
    return {
      displayLinks: [],
    };
  },
  computed: {

  },
  methods: {
    calcClass(linkGroup) {
      const classes = [
        'col',
        's12',
        `m${12 / linkGroup.length}`,
      ];
      return classes;
    },

    viewLinks() {
      axios.get('https://us-central1-goodash-8856b.cloudfunctions.net/api/links')
      .then((response) => {
        const chunkSize = 4;
        for (let i = 0; i < response.data.length; i += chunkSize) {
          const tempItems = response.data.slice();
          this.displayLinks.push(tempItems.splice(i, (chunkSize)));
        }
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      });
    },
  },
  mounted() {
    this.viewLinks();
  },
};
