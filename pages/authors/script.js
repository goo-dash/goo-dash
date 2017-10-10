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
          image: 'https://www.gravatar.com/avatar/0c0bbe558e4e08923b6b9b4a702fb3df?s=400',
          structuredData: {
            '@context': 'http://schema.org',
            '@type': 'Person',
            'name': 'Chris Mipi',
            'description': 'Software Engineer',
            'disambiguatingDescription': 'Software Engineer, Entreprenuer',
            'url': 'https://mcmipi.xyz',
            'email': 'chris@operadev.com',
            'image': 'https://www.gravatar.com/avatar/0c0bbe558e4e08923b6b9b4a702fb3df?s=400',
            'contactPoint': {
              '@type': 'ContactPoint',
              'serviceType': 'Software Engineering',
              'telephone': '+27-61-512-0335',
              'contactType': 'Customer service',
              'email': 'chris@operadev.com'
            }
          }
        },
        {
          name: 'Madi',
          link: 'https://mjshika.xyz',
          email: 'madi@mjshika.xyz',
          image: 'https://www.gravatar.com/avatar/a2235c6b861562b738dbc63dcb1dcc47?s=400',
          structuredData: {
            '@context': 'http://schema.org',
            '@type': 'Person',
            'name': 'Madi Shika',
            'description': 'Software Engineer',
            'disambiguatingDescription': 'Software Engineer, Entreprenuer',
            'url': 'https://mjshika.xyz',
            'email': 'madi@mjshika.xyz',
            'image': 'https://www.gravatar.com/avatar/a2235c6b861562b738dbc63dcb1dcc47?s=400',
            'contactPoint': {
              '@type': 'ContactPoint',
              'serviceType': 'Software Engineering',
              'telephone': '+27-76-312-7907',
              'contactType': 'Customer service',
              'email': 'madi@mjshika.xyz'
            }
          }
        },
      ],
    };
  },
};
