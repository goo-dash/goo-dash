
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
      link: this.value,
      wrapperClasses: [
        'link-wrapper',
        'center-align',
      ],
      textClasses: [
        'link-text',
      ],
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
      window.location = this.link.url;
    },
  },
};
