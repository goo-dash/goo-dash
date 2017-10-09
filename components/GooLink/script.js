
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
      showLoader: false,
      textClasses: [
        'link-text',
      ],
      wrapperClasses: [
        'link-wrapper',
        'center-align',
      ],
    };
  },
  computed: {
    wrapperStyles: {
      get: function () {
        return {
          'background-color': this.link.backgroundColor,
        };
      },
      set: function (newStyles) {
        const styles = {};
        styles['background-color'] = this.link.backgroundColor;
        for(const style in newStyles){
          console.log('STYLE: ', style);
          styles[style] = newStyles[style];
        }
        console.log('RETURNINGL: ', styles);
        return styles;
      }
    },

    textStyles() {
      return {
        color: `${this.link.textColor}`,
      };
    },
  },
  methods: {
    goToLink() {
      setTimeout(function(){
        this.wrapperClasses.push('fullscreen');
        this.showLoader = true;
        setTimeout(function(){
          window.location = this.link.url;
        }.bind(this), 2000);
      }.bind(this), 150);

    },
  },
};
