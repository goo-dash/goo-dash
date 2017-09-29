
export default {
  name: 'link',
  props: {
    value: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      wrapperClasses: [
        'link-wrapper',
        'center-align',
      ],
      textClasses: [
        'link-text',
      ],
      link: this.value,
    };
  },
  computed: {
    wrapperStyles() {
      return {
        'background-color': this.link.backgroundColor,
      };
    },

    textStyles() {
      return {
        color: `${this.link.textColor}`,
      };
    },
  },
  methods: {
    goToLink() {
      console.log('Going to link: ', this.link.url);
    },
  },
};
