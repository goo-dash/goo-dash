<template>
  <div id="app">
    <header>
      <nav v-if="showNav" class="white">
        <div class="nav-wrapper">
          <a href="#" data-activates="mobile-demo" class="button-collapse teal-text"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><router-link class="teal-text" to="/">Home</router-link></li>
            <li><router-link class="teal-text" to="/">Contribute</router-link></li>
            <li><router-link class="teal-text" to="/authors">Authors</router-link></li>
          </ul>
          <ul class="side-nav" id="mobile-demo">
            <li><router-link class="teal-text" to="/">Home</router-link></li>
            <li><router-link class="teal-text" to="/">Contribute</router-link></li>
            <li><router-link class="teal-text" to="/authors">Authors</router-link></li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <page-footer></page-footer>
    <script type='application/ld+json' v-text='structuredData.applicationLogo'></script>
  </div>
</template>

<script>
  import PageFooter from '@/components/PageFooter/PageFooter'

  export default {
    name: 'app',
    data () {
      return {
        structuredData: {
          applicationLogo: {
            "@context": "http://schema.org", // eslint-disable-line
            "@type": "Organization", // eslint-disable-line
            "url": "https://goodash.xyz", // eslint-disable-line
            "logo": "https://goodash.xyz/logo.svg" // eslint-disable-line
          }
        }
      }
    },
    components: {
      PageFooter
    },
    computed: {
      showNav () {
        return !(this.$route.path === '/')
      }
    },
    mounted  () {
      // eslint-disable-next-line
      $('.button-collapse').sideNav()
    }
  }
</script>

<style lang="scss">
  @import './styles/fonts.scss';
  @import './styles/icons.scss';
  @import './styles/general.scss';
</style>
