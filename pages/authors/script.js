import axios from 'axios';
import GooLink from '@/components/GooLink/GooLink';

export default {
  name: 'dashboard',
  components: {
    GooLink,
  },
  data() {
    return {
      authors: [
        {
          name: 'Chris',
          link: 'https://mcmipi.xyz',
          email: 'chris@operadev.com',
          image: 'https://www.gravatar.com/avatar/0c0bbe558e4e08923b6b9b4a702fb3df?s=400'
        },
        {
          name: 'Madi',
          link: 'https://mjshika.xyz',
          email: 'madi@mjshika.xyz',
          image: 'https://www.gravatar.com/avatar/a2235c6b861562b738dbc63dcb1dcc47?s=400'
        },
      ],
    };
  },
};
